import { AppContext } from "../../../contexts/Context";
import { useContext } from "react";
import { upperCaseFirstCharacter } from "../../../utils/buttonClick";
import categoryHeroBg from '@/assets/image/categoryHeroBg.webp';
import womenHeroBg from '@/assets/image/womenHeroBg.webp';
import menHeroBg from '@/assets/image/menHeroBg.webp';

const Banner = ({ gender }) => {
  const { user } = useContext(AppContext);

  const bannerClass = [
    "m-0",
    "border-none",
    "flex",
    "h-32",
    "flex-col",
    "gap-2",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "w-full",
    "backdrop-brightness-20",
  ];

  const backgroundImage = user.category ? categoryHeroBg : (gender === "2" ? womenHeroBg : menHeroBg);

  const conditionalBanner = (text) => {
    if (text === "View All Styles") {
      return "Category";
    }

    if (!text) {
      return "Category";
    }
    return upperCaseFirstCharacter(text);
  };

  return (
    <div className={bannerClass.join(" ")} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {user.category ? (
        <div className="text-white flex justify-center flex-col items-center backdrop-brightness-50 h-32">
          <h2 className="text-lg">{conditionalBanner(user.gender)}</h2>
          <h1 className="text-xl font-bold">
            {conditionalBanner(user.category)}
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
