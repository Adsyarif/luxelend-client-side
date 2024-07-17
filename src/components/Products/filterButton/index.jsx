// import { getProducts } from "../api/getProducts";

export function FilterButton() {
  // const products = getProducts();

  // const Products = data.products;
  // console.log(Products);

  return (
    <div className="p-4 border-none flex justify-between">
      <button className="px-3 py-1 rounded-md bg-lightBrown">
        Filter + Sort
      </button>
      {/* <p className="italic">{products.length} result</p> */}
    </div>
  );
}
