import productImg from "/src/assets/image/product.webp";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export function ProductCard() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:5000/women/product", {
  //       timeout: 5000,
  //       headers: {
  //         Accept: "application/json, text/plain",
  //         // "Access-Control-Allow-Origin": "*",
  //         // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const navigate = useNavigate();

  // const handleWhatsApp = () => {
  //   location.href =
  //     "https://wa.me/08231231412?text=I want to rent this product";
  // };

  return (
    <>
      <div>
        <div className="border-none">
          <img src={productImg} alt="" />
          <div className="p-2 ml-1">
            <p className="text-xs">Ted Baker</p>
            <p className="text-xs pb-2">Floral Pink Puff Sleeve Maxi Dress</p>
            <p className="font-semibold text-xs">Rent for IDR 1.032.000</p>
            <p className="text-xs">Retail value IDR 5.676.000</p>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          {/* <button
            onClick={handleWhatsApp}
            className="w-4/6  px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r  from-lightBrown from-10%  to-darkBrown"
          >
            Rent Now
          </button> */}
          <a
            href="https://wa.me/08231231412?text=I want to rent this product"
            target="_blank"
            className="w-4/6  px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r  from-lightBrown from-10%  to-darkBrown text-center"
          >
            Rent Now
          </a>
        </div>
      </div>
    </>
  );
}
