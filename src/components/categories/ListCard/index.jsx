// import { Button } from "../../Components";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../../contexts/Context";
import { useContext, useEffect } from "react";

const ListCard = ({ items, gender }) => {
  const { user, setUser } = useContext(AppContext);

  const selectCategory = (category, gender) => {
    return setUser({
      gender: gender,
      category: category,
    });
  };

  const path = [user.gender, user.category];

  return (
    <>
      {user.category && <Navigate to={path.join("/").toLowerCase()} />}
      <div className="grid grid-cols-2 w-80 mx-auto">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => selectCategory(item, gender)}
            className="text-start text-sm p-2 hover:bg-categoryYellow w-40"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ListCard;
