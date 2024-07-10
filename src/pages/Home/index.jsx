import { Header } from "../../components/common";
import { Card } from "../../components/common/Card";
import { WelcomeBanner } from "../../components/Home/WelcomeBanner";
import { Button } from "../../components/common/Button";
import { HomeBanner } from "../../components/Home/HomeBanner";
import { BrandLineup } from "../../components/Home/BrandLineup";
import { FeaturesCard } from "../../components/Home/FeaturesCard";
import { NavButton } from "../../components/common/NavbarButton";

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
