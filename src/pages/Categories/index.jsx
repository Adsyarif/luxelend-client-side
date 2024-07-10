import { CategoryCard } from "../../components/categories";
import { Header, BackButton } from "../../components/common";
import { useState } from "react";
import data from "../../data/categoryData.json";

const Categories = () => {
  // console.log(data.gender.men);
  const [Categories, setCategories] = useState({
    women: [],
    men: [],
  });
  const fetchCategory = async () => {
    const response = fetch("../../data/categoryData.json");
    const data = response.json();
  };

  return (
    <div className="max-w-screen-sm mx-auto md:max-w-2xl">
      <Header />
      <BackButton isText={true} />
      <CategoryCard items={data.category.women} gender={"Women"} />
      <CategoryCard items={data.category.men} gender={"Men"} />
    </div>
  );
};

export default Categories;
