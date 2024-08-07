import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header, Button, BackButton } from "@/components/common";
import TableSizeGuide from "@/components/ProductDetail/TableSizeDetail";
import { StickyRent } from "@/components/ProductDetail/StickyRent";
import { Carousel } from "@/components/ProductDetail/Carousel";
import { ShareButton } from "@/components/ProductDetail/ShareButton";
import config from "@/config";

export function ProductDetail() {
  const { gender, product_id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'IDR'
  });

  useEffect(() => {
    const fetchDetailProductData = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/product/${product_id}`
        );
        setProductDetail(response.data.data);
      } catch (error) {
        console.error("Error fetching product details data", error);
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };
    if (product_id) {
      fetchDetailProductData();
    }
  }, [gender, product_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!productDetail) {
    return <div>No product details found</div>;
  }

  const getProductProperty = (categoryIds) => {
    const property = productDetail.product_properties.find(
      prop => prop.property && categoryIds.includes(prop.property.property_category_id)
    );
    
    return property ? property.property.value : null;
  };

  return (
    <div className="bg-white max-w-screen-sm mx-auto md:max-w-2xl border-none">
      <Header />
      <BackButton isText={false}/>
      <div className="flex justify-center mt-4">
        <Carousel product_id={product_id} />
      </div>
      <div className="m-3 capitalize flex justify-between items-center">
        <div className="mt-3">
          <h1 className="font-bold text-2xl">
            {getProductProperty([3])}
          </h1>
          <p>{productDetail.name}</p>
          <p>Retail value {currency.format(productDetail.retail_price)}</p>
        </div>
        <div>
          <ShareButton />
        </div>
      </div>
      <div className="ml-3 mr-3 my-3 capitalize">
        <h1 className="font-bold text-xl">Product Details</h1>
        <ul className="list-disc ml-5 mb-5">
          <li>
            Style: {getProductProperty([4, 6])}
          </li>
          <li>
            Material: {getProductProperty([5])}
          </li>
          <li>
            Size: {productDetail.product_properties
              .filter(prop => prop.property && prop.property.property_category_id === 1)
              .map(prop => prop.property.value)
              .join(', ')}
          </li>
          <li>Fit note: {productDetail.fit_note}</li>
          <li>
            Color: {productDetail.product_properties
              .filter(prop => prop.property && prop.property.property_category_id === 2)
              .map(prop => prop.property.value)
              .join(', ')}
          </li>
        </ul>
        <TableSizeGuide />
      </div>
      <StickyRent brand={getProductProperty([3])} productName={productDetail.name} />
    </div>
  );
}
