import { Header, Button, NavbarButton } from "@/components/common";
import {
  WelcomeBanner,
  HomeBanner,
  BrandLineup,
  FeaturesCard,
} from "@/components/Home";

import brands from "@/data/brandList.json";
import servicesData from "@/data/servicesList.json";

import { Link } from "react-router-dom";

export function HomePages() {
  const selectGender = (gender) => {
    const { setUser } = useContext(AppContext);

    return setUser((prev) => ({
      ...prev,
      gender: gender,
    }));
  };

  return (
    <div className="max-w-screen-sm mx-auto md:my-20 md:max-w-2xl">
      <Header />
      <WelcomeBanner />
      <div className=" flex flex-row justify-center align-middle font-semibold gap-10 my-4">
        <Link to={"/women"}>
          <Button
            text={"Women"}
            type={"home"}
            onClick={() => selectGender("women")}
          />
        </Link>
        <Link to={"/men"}>
          <Button
            text={"Men"}
            type={"home"}
            onClick={() => selectGender("men")}
          />
        </Link>
      </div>
      <HomeBanner />
      <BrandLineup items={brands} />
      <FeaturesCard items={servicesData} />
      <NavbarButton />
    </div>
  );
}
