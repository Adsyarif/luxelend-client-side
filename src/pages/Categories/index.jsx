import { CategoryCard } from "@/components/categories";
import { Header, BackButton } from "@/components/common";
import { useEffect, useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://luxelend-production.up.railway.app/gender_category')
      .then(response => response.json())
      .then(data => {
   
        setCategory(data.gender_category);
      })
      .catch(error => console.error('Error fetching gender categories:', error));
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto md:max-w-2xl">
      <Header />
      <BackButton isText={true} />
      {category.length > 0 && (
        <>
          <CategoryCard 
            items={category.filter(item => item.gender.name === "men").map(item => item.category)} 
            gender="1" 
          />
          <CategoryCard 
            items={category.filter(item => item.gender.name === "women").map(item => item.category)} 
            gender="2" 
          />
        </>
      )}
    </div>
  );
};

export default Categories;
