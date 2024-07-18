import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "@/components/common";
import config from "@/config";

export function StickyRent({brand, productName}) {
  const whatsappLink =
    `https://api.whatsapp.com/send/?phone=${6285603770067}&text=%22Halo, aku mau sewa brand ${brand} dengan produk ${productName} untuk tanggal <<tulis tanggal disini>>%22&type=phone_number&app_absent=0`;
  const { gender, product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'IDR'
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/product/${product_id}`
        );
        setProduct(response.data.data);
        
      } catch (error) {
        console.error("Error fetching product rent price", error);
        setError("Error fetching product rent price");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>No rent price found</div>;
  }
  
  const stock = parseInt(product.stock);
  const isOutOfStock = stock === 0;

  return (
    <div className="flex items-center bottom-0 sticky font-medium text-lg text-white">
      <Card className=" rounded-md flex w-screen justify-between text-center items-center bg-[#011224] p-3">
        <p className=" font-bold md:ml-6">Rent for {currency.format(product.rented_price)}</p>
        <div className="flex  md:mr-6 ">
            {isOutOfStock ? (
              <button
                className="  text-center px-3 py-1 rounded-md text-white font-semibold bg-gray cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <a
                className=" text-center px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r from-lightBrown from-10% to-darkBrown hover:text-black"
                href={`${whatsappLink} ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rent Now
              </a>
            )}
        </div>
      </Card>
    </div>
  );
}