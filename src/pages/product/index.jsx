import { ProductList, FilterButton } from "@/components/Products";
import { BottomNavbar, Header } from "@/components/common";

export function ProductPage() {
  return (
    <div className="border-none p-0">
      <Header />
      <div className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('/src/assets/image/genderHeroBg.webp')]">
        <p className="text-sm">Category</p>
        <p className="font-bold text-2xl">Women</p>
      </div>
      <div className="p-4 border-none flex justify-between">
        <FilterButton />
        <p className="italic">180 result</p>
      </div>
      <ProductList />
      <BottomNavbar />
    </div>
  );
}
