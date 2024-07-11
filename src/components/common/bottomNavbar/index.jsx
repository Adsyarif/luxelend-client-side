import homeImg from "/src/assets/image/Home.png";
import listImg from "/src/assets/image/List.png";

export function BottomNavbar() {
  return (
    <div className="flex justify-center sticky bottom-10 font-medium text-lg text-stone-900">
      <div className="border-slate-100 shadow-md rounded-full flex w-fit justify-around text-center items-center bg-white p-5 gap-3">
        <button className="bg-transparent border-none flex items-center gap-2">
          <img src={homeImg} alt="" className="size-4" />
          <p>Home</p>
        </button>
        <span></span>
        <button className="bg-transparent border-none flex items-center gap-2 ">
          <img src={listImg} alt="" className="size-4" />
          <p>Category</p>
        </button>
      </div>
    </div>
  );
}
