import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export function ProductCard() {
  // const { gender } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://luxelend-production.up.railway.app/product`
        );
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    if (products !== null) {
      getProducts();
    }
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // const navigate = useNavigate();

  // const handleWhatsApp = () => {
  //   location.href =
  //     "https://wa.me/08231231412?text=I want to rent this product";
  // };

  // const navigate = useNavigate();

  // const handleProductDetail = () => {
  //   // navigate(`productDetail/${gender}/${product.id}`);
  // };

  return (
    <>
      <p className="text-right mr-5">{products.length} result</p>

      <div className="p-4 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div className="border border-gray ">
                <div className="flex bg-lightGray">
                  <img
                    src={product.product_images[0].value}
                    alt={product.name}
                    className="h-72 w-full"
                  />
                  {product.stock === 0 && (
                    <button
                      disabled
                      className="bg-lightBrown text-xs p-1 font-semibold z-10 absolute"
                    >
                      This item is rented now
                    </button>
                  )}
                </div>

                <div className="p-2 ml-1">
                  <p className="text-xs">{product.name}</p>
                  <p className="font-semibold text-xs">
                    Rent for IDR {product.rented_price}
                  </p>
                  <p className="text-xs">
                    Retail value IDR {product.retail_price}
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-5">
                {product.stock === 0 ? (
                  <a
                    disabled
                    className="w-4/6  mt-0 px-3 py-1 rounded-md text-black font-normal bg-gradient-to-r bg-gray text-center"
                  >
                    Rent Now
                  </a>
                ) : (
                  <a
                    href="https://wa.me/08231231412?text=I want to rent this product"
                    target="_blank"
                    className="w-4/6  px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r  from-lightBrown from-10%  to-darkBrown bg-opacity-25 text-center"
                  >
                    Rent Now
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
