import { Card } from "../../common/Card";
import LuxelendLogo from "../../../assets/image/luxelend-logo.webp";

export function WelcomeBanner() {
    return (
        <Card className="m-0 border-none flex flex-row text-center text-2xl gap-4 justify-center items-center h-16 text-white bg-gradient-to-r from-gray-900 from-40% to-blue-900">
            <img className="h-14 w-14" src={LuxelendLogo} alt="LuxlendLogo" />
            <i>Welcome to LuxeLend!</i>
        </Card>
    );
}
