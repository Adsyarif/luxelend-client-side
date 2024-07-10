import { Card } from "../../components/common/cards";
import { ProductList } from "../../components/Products/productList";
import { Navbar } from "../../components/common/Navbar";
import { BottomNavbar } from "../../components/common/bottomNavbar";
import { Button } from "../../components/common/button";

export function Product() {
  return (
    <Card className="border-none p-0">
      <Navbar />
      <Card className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('src/assets/image/genderHeroBg.webp')]">
        <p className="text-sm">Category</p>
        <p className="font-bold text-2xl">Women</p>
      </Card>
        <div className="p-4 border-none flex justify-between">
          <Button className="bg-yellow-100">Filter + Sort</Button>
          <p className="italic">180 result</p>
        </div>
      <ProductList />
      <BottomNavbar />
    </Card>
  );
}
