import { Card } from "../Card";
import searchImg from "../../../assets/image/search.png";

export function Header() {
    return (
        <Card className="top-0 sticky h-20 border-none bg-gray-900 flex justify-around items-center">
            <span className="invisible">0</span>
            <p className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text font-semibold text-3xl tracking-widest text-center">
                LUXELEND
            </p>
            <img src={searchImg} alt="" className="right-0 text-right size-4" />
        </Card>
    );
}
