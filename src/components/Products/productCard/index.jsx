import productImg from "/src/assets/image/product.webp";

export function ProductCard() {
  return (
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
        <button className="w-4/6  px-3 py-1 rounded-md text-white font-semibold bg-gradient-to-r  from-lightBrown from-10%  to-darkBrown">
          Rent Now
        </button>
      </div>
    </div>
  );
}
