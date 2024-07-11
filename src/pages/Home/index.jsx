import { Header } from "@/components";
import { WelcomeBanner } from "@/components/Home";
import { Button } from "@/components";
import { HomeBanner } from "@/components/Home";
import { BrandLineup } from "@/components/Home";
import { FeaturesCard } from "@/components/Home";
import { NavButton } from "@/components";
import { useNavigate } from "react-router-dom";

export function HomePages() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <WelcomeBanner />
      <div className=" flex flex-row justify-center align-middle font-semibold gap-10 my-4">
        <Button
          onClick={() => {
            navigate("/women");
          }}
          className="bg-rose-50 w-28"
        >
          <p>Women</p>
        </Button>
        <Button
          onClick={() => {
            navigate("/men");
          }}
          className="bg-rose-50 w-28"
        >
          <p>Men</p>
        </Button>
      </div>
      <HomeBanner />
      <BrandLineup />
      <FeaturesCard />
      <NavButton />
    </div>
  );
}
