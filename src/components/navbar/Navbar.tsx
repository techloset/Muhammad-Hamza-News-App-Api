import React from "react";
import logo from "../../assets/logo.png";
import forward from "../../assets/forward-icon.png";
import people from "../../assets/people-icon.png";
import search from "../../assets/search-icon.png";
import menu from "../../assets/menu-icon.png";


const Navbar = () => {
  return (
    <>
      <div
        className="w-full 
        h-20 
      bg-white px-32
        flex 
        items-center 
        justify-between 
        bg-opacity-90 
        backdrop-blur-[28px] "
      >
        <div>
          <img className="w-[62.79px] h-[52px]" alt="" src={logo} />
        </div>
        <div className="flex items-center gap-10 text-zinc-800 text-base font-semibold font-['Nunito Sans']">
          <div className="hidden md:block">Corona Update</div>
          <div className="hidden md:block">Politics</div>
          <div className="hidden md:block">Buisness</div>
          <div className="hidden md:block">Sports</div>
          <div className="hidden md:block">World</div>
          <div className="hidden md:block">Travel</div>
          <div className="hidden md:block">Products</div>
          <div className="hidden md:block">
            <img src={forward} alt="forward-icon" />
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <img src={people} alt="peole-icon" />
          </div>
          <div>
            <img src={search} alt="search-icon" />
          </div>
          <div>
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
