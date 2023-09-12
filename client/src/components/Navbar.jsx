import { useEffect, useState } from "react";
import logo from "../assets/images/logo_nextflix.png";
import userBlue from "../assets/images/default-blue.png";
import MobileMenu from "./MobileMenu.jsx";
import NavbarItem from "./NavbarItem.jsx";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu.jsx";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleAccountMenu = () => setShowAccountMenu(!showAccountMenu);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 p-6 flex flex-row items-center transition duration-500 ${
          showBackground && "bg-zinc-900/90"
        }`}>
        {/*NETFLIX LOGO */}
        <img className="h-4 lg:h-7" src={logo} alt="logo_netflix" />
        {/*NAVBAR OPTIONS */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label={"Home"} />
          <NavbarItem label={"Series"} />
          <NavbarItem label={"Films"} />
          <NavbarItem label={"New & Popular"} />
          <NavbarItem label={"My List"} />
          <NavbarItem label={"Browse by lenguages"} />
        </div>
        {/*MOBILE MENU */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center ">
          {/*SEARCH*/}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          {/*NOTIFICATIONS*/}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          {/*ACCOUNT MENU */}
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={userBlue} alt="default_blue" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
