// import { Button } from "../../Components";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/Context";
import { useContext } from "react";

const ListCard = ({ items, gender }) => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const selectCategory = (category, gender, user) => {
    setUser({
      gender: gender,
      category: category,
    });

    const path = ["/", gender.toLowerCase(), category.toLowerCase()];
    navigate(path.join("/"));
  };

  return (
    <div className="grid grid-cols-2 w-80 mx-auto">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => selectCategory(item, gender, user)}
          className="text-start text-sm p-2 hover:bg-lightBrown w-40"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ListCard;
