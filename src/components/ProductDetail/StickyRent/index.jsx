import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "@/components/common";
import { Button } from "@/components/common";

export function StickyRent() {
  const whatsappLink =
    "https://wa.me/08231231412?text=I want to rent this product";
  const { gender, product_id } = useParams();
  const [productRentPrice, setProductRentPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductRentPrice = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/${gender}/product/${product_id}`
        );
        setProductRentPrice(response.data);
        console.log(`Response for ${gender} and ${product_id}:`, response.data);
      } catch (error) {
        console.error("Error fetching product rent price", error);
        setError("Error fetching product rent price");
      } finally {
        setLoading(false);
      }
    };

    fetchProductRentPrice();
  }, [gender, product_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!productRentPrice) {
    return <div>No rent price found</div>;
  }

  return (
    <div className="flex justify-center bottom-0 sticky font-medium text-lg text-white">
      <Card className="flex w-screen justify-around text-center items-center bg-[#011224] p-5">
        <p className="font-bold">Rent for IDR {productRentPrice.rent_price}</p>
        <span></span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#F4F4F4] text-[#191825] border-none">
            <p>Rent Now</p>
          </Button>
        </a>
      </Card>
    </div>
  );
}