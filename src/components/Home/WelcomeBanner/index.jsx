import { Card } from "../../common/Card";
import LuxelendLogo from "../../../assets/image/luxelend-logo.webp";

export function WelcomeBanner() {
  return (
    <div className="m-0 border-none flex flex-row text-center text-2xl gap-4 justify-center items-center h-16 bg-gradient-blue ">
      <img className="h-14 w-14" src={LuxelendLogo} alt="LuxlendLogo" />
      <p className="text-white font-italic">Welcome to LuxeLend!</p>
    </div>
  );
}
