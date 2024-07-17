import { AppContext } from "../../../contexts/Context";
import { useContext, useEffect, useState } from "react";
import { upperCaseFirstCharacter } from "../../../utils/buttonClick";

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

  if (user.category) {
    bannerClass.push("bg-[url('categoryHeroBg.webp')]");
  } else {
    gender === "2"
      ? bannerClass.push("bg-[url('womenHeroBg.webp')]")
      : bannerClass.push("bg-[url('menHeroBg.webp')]");
  }

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
    <div className={bannerClass.join(" ")}>
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
