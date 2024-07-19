import home from "@/assets/image/HomeBanner.webp"

export function HomeBanner() {
    return (
        <div className="m-0 border-none  flex  flex-col">
            <img src={home} className=" h-56 bg-center bg-no-repeat bg-cover"/>
        </div>
    );
}
