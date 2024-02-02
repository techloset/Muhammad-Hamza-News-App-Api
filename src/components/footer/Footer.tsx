import React from "react";
import Container from "../container/Container";
import FooterList from "./FooterList";
import logo from "../../assets/images/logo2.png";
import wifi from "../../assets/images/wifi.png";
import twitter from "../../assets/images/twitter.png";
import reddit from "../../assets/images/reddit.png";
import facebook from "../../assets/images/facebook.png";

const Footer = () => {
  return (
    <footer className="w-full relative bottom-0 bg-slate-900 text-white font-medium mt-16 font-poppins">
      <Container>
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <div className="flex flex-col items-center gap-3 lg:gap-7">
              <div className="cursor-pointer">
                <img src={logo} alt="" />
              </div>
              <div className="text-gray-400 text-xs font-normal">
                copyright © {new Date().getFullYear()} | NBC NEWS
              </div>
            </div>
          </FooterList>

          <div className="hidden lg:block text-[15px]">
            <h3>Privacy Policy</h3>
            <h3>Do not sell my personal info</h3>
            <h3>Terms of Service</h3>
            <h3>nbcnews.com Site Map</h3>
          </div>

          <FooterList>
            <div className="flex flex-col text-[15px] items-center lg:items-end lg:mr-20 gap-4 lg:gap-7">
              <div className="flex flex-col lg:flex-row justify-center  text-center gap-1 lg:gap-7">
                <div>About</div>
                <div>Contact</div>
                <div>Careers</div>
                <div>Coupons</div>
              </div>
              <div className="flex gap-7">
                <img className="w-7 h-7 cursor-pointer" src={wifi} alt="wifi" />
                <img
                  className="w-7 h-7 cursor-pointer"
                  src={twitter}
                  alt="wifi"
                />
                <img
                  className="w-7 h-7 cursor-pointer"
                  src={reddit}
                  alt="wifi"
                />
                <img
                  className="w-7 h-7 cursor-pointer"
                  src={facebook}
                  alt="wifi"
                />
              </div>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
