import { Card } from "../../../components/common/Card";
import kateSpade from "../../../assets/image/kate-spade.webp";
import michaelKors from "../../../assets/image/michael-kors.webp";
import tedBaker from "../../../assets/image/ted-baker.webp";
import reiss from "../../../assets/image/reiss.webp";

export function BrandLineup() {
    return (
        <Card className="pb-4">
            <p className="py-2 mx-4 font-bold">Brand</p>
            <div className="flex flex-row mx-8 gap-6 text-xs font-semibold text-center mx-3">
                <div>
                    <img
                        className="h-12 ml-2 my-1"
                        src={kateSpade}
                        alt="Kate Spade"
                    />
                    <p>Kate Spade</p>
                </div>
                <div>
                    <img
                        className="pl-2 h-14"
                        src={michaelKors}
                        alt="Michael Kors"
                    />
                    <p>Michael Kors</p>
                </div>
                <div>
                    <img className="pt-4 pb-3" src={tedBaker} alt="Ted Baker" />
                    <p>Ted Baker</p>
                </div>
                <div>
                    <img className="pt-6 pb-5" src={reiss} alt="Reiss" />
                    <p>Reiss</p>
                </div>
            </div>
        </Card>
    );
}
