import heart from "../../assets/images/heart.svg";
import homeImg from "../../assets/images/homeImg.png";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import Container from "../container/Container";
import Button from "../button/Button";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="grid md:grid-cols-2 my-0 md:my-10 items-center relative">
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-zinc-800"></div>
          <img
            className="w-full min-h-[350px] 2xl:min-h-[500px] 2xl:min-w-[750px] rounded-md object-cover"
            alt=""
            src={homeImg}
          />

          <div className="max-w-auto md:ml-16">
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <p className="text-customRed text-sm font-semibold font-poppins leading-[29.40px] tracking-tight">
                  Trending
                </p>
                <div className="flex gap-4">
                  <img
                    className="cursor-pointer"
                    src={heart}
                    height={44}
                    alt="heart-icon"
                  />
                  <img className="cursor-pointer" src={download} alt="" />
                  <img className="cursor-pointer" src={save} alt="" />
                </div>
              </div>
            </div>
            <div className="text-white md:text-customBlack absolute top-[190px] sm:top-[350px] md:top-0 md:relative px-6 sm:px-20 md:px-0 my-0 md:my-4">
              <h1 className="text-2xl md:text-[20px] lg:text-[32px] font-semibold font-ibm-serif md:mr-9">
                Cake meme reflects coronavirus absurdity in a world where
                nothing is what it seems
              </h1>
            </div>
            <div className="hidden md:block">
              <p className="text-[15px] font-normal text-customBlack font-poppins my-3 leading-normal md:mr-9">
                Earlier this month, a viral video depicting hyper-realistic
                cakes as everyday items had folks on social media
                double-guessing every other post, and sometimes even their own
                realities, effectively launching the next meme : “Is this real
                or is this cake?”
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-5 text-custoBlack text-[13px] font-normal leading-snug">
                <p className="">2 hours ago</p>
                <p className="opacity-70">By Lucy Hiddleston | 4min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 pt-6 md:py-3 my-0 md:my-11 bg-customRed">
          <Button text="Breaking News" />
          <p className="text-white text-center px-6 text-xl font-medium font-poppins pb-8 md:pb-0">
            Kanye West says he's running for president in 2020.
          </p>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
