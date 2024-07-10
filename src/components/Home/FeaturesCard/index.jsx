import { Card } from "../../common/Card";
import Scroll from "../../../assets/image/scroll.webp";
import Package from "../../../assets/image/package.webp";
import Bag from "../../../assets/image/bag.webp";

export function FeaturesCard() {
    return (
        <Card className="flex flex-col justify-center bg-rose-50 h-44">
            <b className="my-2 mx-6">Rent, Return, Repeat</b>
            <div className="flex text-xs font-semibold text-center flex-row mx-8 gap-6 text-">
                <div>
                    <img className="h-12 pl-5" src={Scroll} alt="Logo1" />
                    <p className="w-24">
                        Pieces arrive clean and in perfect condition
                    </p>
                </div>
                <div>
                    <img className="h-12 pl-2" src={Package} alt="Logo2" />
                    <p>Choose one-time rental rent base on your need</p>
                </div>
                <div>
                    <img className="h-12 pl-6" src={Bag} alt="Logo3" />
                    <p className="w-24">100+ Premium styles in various sizes</p>
                </div>
            </div>
        </Card>
    );
}
