import userBlue from "../assets/images/default-blue.png";
import useUser from "../hooks/useUser.js";
const AccountMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  const { user, clearUser } = useUser();

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={userBlue} alt="default_blue" />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => clearUser()}
          className="px-3 text-center text-white text-sm hover:underline">
          Sing out Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
