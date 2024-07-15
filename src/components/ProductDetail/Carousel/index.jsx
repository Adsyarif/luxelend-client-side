import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "@/config";

export function Carousel({ gender, product_id }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/product/${product_id}`
        );
        setImageUrls(response.data.data.product_images);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images");
        setLoading(false);
      }
    };

    fetchImageURL();
  }, [gender, product_id]);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!imageUrls || imageUrls.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="relative w-[45vh] overflow-hidden rounded-md">
      <div
        className="flex snap-x snap-mandatory overflow-x-auto w-[45vh] no-scrollbar"
        onScroll={handleScroll}
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="flex-shrink-0 w-[45vh] snap-center mx-2">
            <img
                className="justify-center w-[45vh] h-full object-cover object-center"
                src={imageUrls[activeIndex].value}
                alt={`Slide ${activeIndex}`}
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center m-2">
        {imageUrls.map((_, index) => (
          <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
            index === activeIndex ? "bg-black" : "bg-aqua"
          }`}
          onClick={() => setActiveIndex(index)}
          style={{ minWidth: "8px", minHeight: "8px", padding: "4px" }}
        ></div>
        
        ))}
      </div>
    </div>
  );
}
