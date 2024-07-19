import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import config from "@/config";
import { NavbarButton, Header } from "@/components/common";
import Filter from "@/components/Products/filter";
import loadingGif from "@/assets/icons/loading.gif";
import womenHeroBg from '@/assets/image/womenHeroBg.webp';
import menHeroBg from '@/assets/image/menHeroBg.webp';
import categoryHeroBg from '@/assets/image/categoryHeroBg.webp';
import categoryMenBg from '@/assets/image/categoryMenBg.webp';

export function ProductPage() {
  const { gender, category } = useParams();
  const [productData, setProductData] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    sizeFilter: '',
    colorFilter: '',
    materialFilter: '',
    brandFilter: '',
    styleFilter: '',
    availableNow: false,
    sortOrder: 'newest',
    categoryFilter: '',
  });
  const [filtering, setFiltering] = useState(false);

  const currency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'IDR',
  });

  const sortProducts = (products, sortOrder) => {
    const sortMap = {
      newest: (a, b) => new Date(b.created_at) - new Date(a.created_at),
      popular: (a, b) => b.stock - a.stock,
      highToLow: (a, b) => b.rented_price - a.rented_price,
      lowToHigh: (a, b) => a.rented_price - b.rented_price,
    };
    return products.slice().sort(sortMap[sortOrder] || ((a, b) => a - b));
  };

  const filterProductsByProperty = (products, propertyCategory, filterValue) => {
    return products.filter((product) => {
      return product.product_properties.some(
        (prop) =>
          prop.property.property_category_id === propertyCategory &&
          prop.property.value === filterValue
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${config.BASE_URL}/product`);

        if (Array.isArray(response.data.products) && response.data.products.length > 0) {
          const allProducts = response.data.products;
          setTotalProductCount(allProducts.length);

          let filteredProducts = allProducts.filter((product) => {
            return product.gender_category.gender.name.toLowerCase() === gender;
          });

          if (category && category !== 'all') {
            filteredProducts = filteredProducts.filter((product) => {
              return product.category.name.toLowerCase() === category.toLowerCase();
            });
          }

          if (filters.sizeFilter) {
            filteredProducts = filterProductsByProperty(filteredProducts, 1, filters.sizeFilter);
          }
          if (filters.colorFilter) {
            filteredProducts = filterProductsByProperty(filteredProducts, 2, filters.colorFilter);
          }
          if (filters.brandFilter) {
            filteredProducts = filterProductsByProperty(filteredProducts, 3, filters.brandFilter);
          }
          if (filters.styleFilter) {
            filteredProducts = filterProductsByProperty(filteredProducts, 4, filters.styleFilter);
            if (gender === 'men') {
              filteredProducts = filteredProducts.concat(
                filterProductsByProperty(allProducts, 6, filters.styleFilter)
              );
            }
          }
          if (filters.materialFilter) {
            filteredProducts = filterProductsByProperty(filteredProducts, 5, filters.materialFilter);
          }
          if (filters.availableNow) {
            filteredProducts = filteredProducts.filter((product) => parseInt(product.stock) > 0);
          }
          filteredProducts = sortProducts(filteredProducts, filters.sortOrder);

          setProductData(filteredProducts);
        } else {
          setError('No product data available');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gender, filters, category]);

  const renderBannerCategory = gender && category;

  return (
    <div className="max-w-screen-sm mx-auto md:max-w-2xl border-none">
      <Header />
      {!(gender && category) && (
        <div className="m-0 border-none flex h-32 flex-col text-center justify-center gap-2 text-white relative">
          <img
            src={gender === 'women' ? womenHeroBg : menHeroBg}
            alt={gender === 'women' ? 'Women Hero' : 'Men Hero'}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-1">
            <p className="text-sm">Category</p>
            <h2 className="text-center font-bold">
              {gender === 'women' ? 'Women Products' : 'Men Products'}
            </h2>
          </div>
        </div>
      )}

      {renderBannerCategory && (
        <div className="capitalize relative m-0 border-none flex h-32 flex-col text-center justify-center gap-2 text-white">
          <img
            src={gender === 'men' ? categoryMenBg : categoryHeroBg}
            alt={gender === 'men' ? 'Category Men Hero' : 'Category Hero'}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative z-1">
            <p className="text-sm">{gender}</p>
            <h2 className="font-bold text-center">{category}</h2>
          </div>
        </div>
      )}

      <div className="p-4 border-none flex justify-between">
        <Filter setFilters={setFilters} category={category} gender={gender} setFiltering={setFiltering} />
        <div className="flex items-center p-5">
          {!loading && !error && <p className="ml-auto">{productData.length} Result</p>}
        </div>
      </div>

      {(loading || filtering) && (
        <div className="flex flex-col justify-center items-center">
          <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
          <p>Loading</p>
        </div>
      )}

      {!loading && !filtering && !error && productData.length === 0 && (
        <p className="ml-auto">No products match the selected filters.</p>
      )}

      {!loading && !filtering && !error && (
        <div className="p-5 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {productData.map((product) => {
            const brandProperty = product.product_properties.find(
              (prop) => prop.property && prop.property.property_category_id === 3
            );
            const stock = parseInt(product.stock);
            const isOutOfStock = stock === 0;
            return (
              <div key={product.id} className="max-w-xs">
                <Link to={`/productDetail/${product.id}`}>
                  <div className="border-none p-3">
                    <div>
                      <img
                        className="object-cover w-full h-72 rounded-md shadow-xl"
                        src={product.product_images[0].value}
                        alt={product.name}
                      />
                    </div>
                    <div className="p-2">
                      {brandProperty && (
                        <p className="text-xs capitalize">{brandProperty.property.value}</p>
                      )}
                      <p className="text-xs pb-2 capitalize">{product.name}</p>
                      <p className="font-semibold text-xs">
                        Rent for {currency.format(product.rented_price)}
                      </p>
                      <p className="text-xs">Retail Value {currency.format(product.retail_price)}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-center pt-5">
                  {isOutOfStock ? (
                    <button
                      className="w-4/6 text-center px-3 py-1 rounded-md text-white font-semibold bg-gray cursor-not-allowed"
                      disabled
                    >
                      Out of Stock
                    </button>
                  ) : (
                    <a
                      className="w-4/6 text-center px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r from-lightBrown from-10% to-darkBrown hover:text-black"
                      href={`https://api.whatsapp.com/send/?phone=${6285603770067}&text=%22Halo, aku mau sewa brand ${brandProperty.property.value} dengan produk ${product.name} untuk tanggal <<tulis tanggal disini>>%22&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rent Now
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <NavbarButton />
    </div>
  );
}
