import React from "react";
import Container from "../container/Container";
import FooterList from "./FooterList";
import logo from "../../assets/images/logo2.svg";
import wifi from "../../assets/images/wifi.svg";
import twitter from "../../assets/images/twitter.svg";
import reddit from "../../assets/images/reddit.svg";
import facebook from "../../assets/images/facebook.svg";

const list1 = [
  "Privacy Policy",
  "Do not sell my personal info",
  "Terms of Service",
  "nbcnews.com Site Map",
];

const list2 = ["About", "Contact", "Careers", "Coupons"];
const images = [wifi, twitter, reddit, facebook];

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
            {list1.map((item, i) => {
              return (
                <h2 className="cursor-pointer" key={i}>
                  {item}
                </h2>
              );
            })}
          </div>

          <FooterList>
            <div className="flex flex-col text-[15px] items-center lg:items-end lg:mr-20 gap-4 lg:gap-7">
              <div className="flex flex-col lg:flex-row justify-center  text-center gap-1 lg:gap-7">
                {list2.map((item, i) => {
                  return (
                    <h2 className="cursor-pointer" key={i}>
                      {item}
                    </h2>
                  );
                })}
              </div>
              <div className="flex gap-7">
                {images.map((image, i) => {
                  return (
                    <img
                      className="w-7 h-7 cursor-pointer"
                      src={image}
                      alt={image}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
