import Container from "../container/Container";
import logo from "../../assets/images/logo.png";
import forward from "../../assets/images/forwardIcon.svg";
import people from "../../assets/images/peopleIcon.svg";
import search from "../../assets/images/searchIcon.svg";
import menu from "../../assets/images/menuIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import crossIcon from "../../assets/images/crossIcon.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="sticky top-0 w-full bg-white z-30 shadow-md">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between px-4 md:px-0">
              <Link to={"/"}>
                <img className="w-[49.33px] h-10" alt="logo" src={logo} />
              </Link>
              <div className={"hidden lg:block"}>
                <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-14 text-zinc-800 text-base font-semibold font-nunito-sans">
                  <li className="cursor-pointer">Corona Update</li>
                  <li className="cursor-pointer">Politics</li>
                  <li className="cursor-pointer">Buisness</li>
                  <li className="cursor-pointer">Sports</li>
                  <li className="cursor-pointer">World</li>
                  <li className="cursor-pointer">Travel</li>
                  <li className="cursor-pointer">Products</li>
                  <li className="cursor-pointer">
                    <img alt="" src={forward} />
                  </li>
                </ul>
              </div>
              <div className="flex gap-6">
                <div className="cursor-pointer">
                  <img src={people} alt="peoleIcon" />
                </div>
                <Link to={"/search"}>
                  <img src={search} alt="searchIcon" />
                </Link>
                <div className="cursor-pointer" onClick={toggleMenu}>
                  <img src={menu} alt="menu" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {showMenu && (
        <Container>
          <div className="relative lg:hidden ">
          <div>
              <img
                src={crossIcon}
                className="absolute right-5 cursor-pointer opacity-40"
                alt=""
                onClick={toggleMenu}
              />
            </div>
          <div className="flex justify-center bg-blue-200 bg-opacity-20 m-2 md:m-5 pt-8 p-5 rounded-lg">
            
            <ul className="w-full flex flex-col text-white text-xl font-semibold font-nunito-sans gap-3">
            <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Corona Update</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Politics</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Buisness</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Sports</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">World</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Travel</li>
                  <li className="cursor-pointer bg-blue-400 bg-opacity-30 rounded-md hover:bg-blue-400 hover:bg-opacity-40 w-full text-center">Products</li>
            </ul>
          </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Navbar;
