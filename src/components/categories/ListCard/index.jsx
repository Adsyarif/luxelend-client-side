// import { Button } from "../../Components";
import { selectCategory } from "../../../utils/buttonClick";

const ListCard = ({ items }) => {
  return (
    <div className="grid grid-cols-2 w-80 mx-auto">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => selectCategory(item)}
          className="text-start text-sm p-2 hover:bg-categoryYellow w-40"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ListCard;
