import { useNavigate } from "react-router-dom";

const ListCard = ({ items, gender }) => {
  const navigate = useNavigate();

  const selectCategory = (categoryName) => {
    const path = `/${categoryName.toLowerCase()}/${gender === "2" ? "women" : "men"}`;
    navigate(path);
  };

  return (
    <div className="capitalize grid grid-cols-2 md:w-96 mx-auto ">
      {items.map((item, name) => (
        <button
          key={item.name}
          onClick={() => selectCategory(item.name)}
          className="ml-5 capitalize text-start md:text-base p-2 hover:bg-lightBrown w-full"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ListCard;
