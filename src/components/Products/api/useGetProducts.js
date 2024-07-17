import axios from "axios";
import { useState, useEffect } from "react";

export function useGetProducts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://luxelend-production.up.railway.app/product`
        );
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    if (data !== null) {
      getProducts();
    }
  }, []);

  // const products = data.products

  // if (loading) {
  //   return <div> Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  console.log(data.products);

  return {
    products: data.products,
  };
}
