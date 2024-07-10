import { Header } from "@/components";
import { Card } from "@/components/common";
import { WelcomeBanner } from "@/components/Home";
import { Button } from "@/components";
import { HomeBanner } from "@/components/Home";
import { BrandLineup } from "@/components/Home";
import { FeaturesCard } from "@/components/Home";
import { NavButton } from "@/components";

export function HomePages() {
  return (
    <Card>
      <Header />
      <WelcomeBanner />
      <div className=" flex flex-row justify-center align-middle font-semibold gap-10 my-4">
        <Button className="bg-rose-50 w-28">
          <p>Women</p>
        </Button>
        <Button className="bg-rose-50 w-28">
          <p>Men</p>
        </Button>
      </div>
      <HomeBanner />
      <BrandLineup />
      <FeaturesCard />
      <NavButton />
    </Card>
  );
}
