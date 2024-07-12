import { CategoryCard } from "@/components/categories";
import { Header, BackButton } from "@/components/common";
import data from "../../data/categoryData.json";

const Categories = () => {
  return (
    <div className="max-w-screen-sm mx-auto md:my-20 md:max-w-2xl ">
      <Header />
      <BackButton isText={true} />
      <CategoryCard items={data.category.women} gender={"Women"} />
      <CategoryCard items={data.category.men} gender={"Men"} />
    </div>
  );
};

export default Categories;
