import { Link } from "react-router-dom";

const NavbarButton = () => {
  return (
    <div className="relative">
      <div className="text-transparantBlack bg-transparant border-gray-400 drop-shadow-xl rounded-full p-3 px-5 fixed bottom-8 left-1/2 transform -translate-x-1/2 hover:bg-white hover:text-black ">
        <div className="flex gap-6">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full hover:text-white hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h6>Home</h6>
            </div>
          </Link>
          <Link to="/category">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full hover:text-white hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </div>
              Category
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarButton;
