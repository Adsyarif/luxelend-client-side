import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header, Button } from "@/components/common";
import TableSizeGuide from "@/components/ProductDetail/TableSizeDetail";
import { StickyRent } from "@/components/ProductDetail/StickyRent";
import { Carousel } from "@/components/ProductDetail/Carousel";
import { ShareButton } from "@/components/ProductDetail/ShareButton";

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
          `http://127.0.0.1:5000/product/${product_id}`
        );
        setProductDetail(response.data.data);
        console.log(`Response for ${gender} and ${product_id}:`, response.data);
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

  return (
    <div className="bg-white max-w-screen-sm mx-auto md:max-w-2xl border-none ">
      <Header />
      <div className="flex mt-4">
        <div className="ml-2 mr-2">
          <Button>Back</Button>
        </div>
        {/* <Carousel gender={gender} product_id={product_id} /> */}
      </div>
      <div className="flex justify-around items-center">
        <div className="mr-2 mt-3">
          <h1 className="font-bold text-2xl">{productDetail.product_properties.find(prop => prop.property && prop.property.property_category_id === 3)?.property.value}</h1>
          <p>{productDetail.name}</p>
          <p>Retail value {currency.format(productDetail.retail_price)}</p>
        </div>
        <div>
          <ShareButton />
        </div>
      </div>
      <div className="ml-7 my-3">
        <h1 className="font-bold text-xl">Product Details</h1>
        <ul className="list-disc ml-5 ">
          <li>
            Style: {productDetail.product_properties.find(prop => prop.property && prop.property.property_category_id === 4)?.property.value}
          </li>
          <li>
            Material: {productDetail.product_properties.find(prop => prop.property && prop.property.property_category_id === 5)?.property.value}
          </li>
          <li>Size: {productDetail.product_properties.find(prop => prop.property && prop.property.property_category_id === 1)?.property.value}</li>
          <li>Fit note: {productDetail.fit_note}</li>
          <li>
            Color: {productDetail.product_properties.find(prop => prop.property && prop.property.property_category_id === 2)?.property.value}
          </li>
        </ul>
      </div>
      {/* tablesizeuide is hardcode */}
      <TableSizeGuide />

      {/* <StickyRent /> */}
    </div>
  );
}