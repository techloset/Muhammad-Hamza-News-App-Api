import Container from "../container/Container";
import logo from "../../assets/images/logo.png";
import forward from "../../assets/images/forward-icon.svg";
import people from "../../assets/images/people-icon.svg";
import search from "../../assets/images/search-icon.svg";
import menu from "../../assets/images/menu-icon.svg";
import { Link } from "react-router-dom";

// Functional component for the Navbar
const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between px-4 md:px-0">
            <Link to={"/"}>
              <img className="w-[49.33px] h-10" alt="" src={logo} />
            </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-10 text-zinc-800 text-base font-semibold font-nunito-sans">
                <li>Corona Update</li>
                <li>Politics</li>
                <li>Buisness</li>
                <li>Sports</li>
                <li>World</li>
                <li>Travel</li>
                <li>Products</li>
                <li>
                  <img alt="" src={forward} />
                </li>
              </ul>
            </div>
            <div className="flex gap-6">
              <div>
                <img src={people} alt="peole-icon" />
              </div>
              <Link to={"/search"}>
                <img src={search} alt="search-icon" />
              </Link>
              <div>
                <img src={menu} alt="menu" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
