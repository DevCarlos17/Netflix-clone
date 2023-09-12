import useUser from "../hooks/useUser.js";
import userBlue from "../assets/images/default-blue.png";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => navigate("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounder-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img src={userBlue} alt="" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
