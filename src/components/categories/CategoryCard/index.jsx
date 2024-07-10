import { Banner } from "../../common";
import { ListCard } from "../index";

const CategoryCard = ({ items, gender }) => {
  return (
    <div className="">
      <Banner gender={gender} />
      <div className="py-2">
        <div className="py-2 flex justify-center">
          <h2 className="font-bold">{gender}</h2>
        </div>
        <ListCard items={items} gender={gender} />
      </div>
    </div>
  );
};

export default CategoryCard;
