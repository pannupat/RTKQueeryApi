import { Link } from "react-router-dom";
import logo from "./image/Pokelogo.png";

const NotFound = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center  bg-[#D9D9D9] w-[100vw] h-[100vh] ">
          <div className="flex flex-col items-center   text-[#3a5da8] mt-[10%]">
            <img className="w-40" src={logo} alt="" />
            <div className="text-[70px] mt-[50px] font-extrabold text-xl">
              Not Found
            </div>
            <Link to="/pokemon/pokemon-list" className="mt-[50px] underline">
              back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
