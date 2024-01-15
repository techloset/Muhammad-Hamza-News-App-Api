import homeImg from "./assets/home-img.png";
import heart from "./assets/heart.png";
import download from "./assets/download.png";
import save from "./assets/save.png";

function App() {
  return (
    <>
      <div className="px-32 grid grid-cols-2 my-10 items-center">
        <div>
          <img className="w-[986px] h-[500px]" alt="" src={homeImg} />
        </div>
        <div className="ml-9">
          <div className="flex items-center justify-between">
            <div className="text-red-700 text-sm font-semibold font-['Poppins'] leading-[29.40px] tracking-tight">
              Trending
            </div>
            <div className="flex gap-4">
              <img src={heart} height={44} alt="" />
              <img src={download} alt="" />
              <img src={save} alt="" />
            </div>
          </div>
          <div className="text-zinc-800 text-[32px] font-semibold my-3 font-['IBM Plex Serif']">
            <h1>
              Cake meme reflects coronavirus absurdity in a world where nothing
              is what it seems
            </h1>
          </div>
          <div className="text-zinc-800 text-[15px] font-normal my-3 font-['Poppins'] leading-normal">
            Earlier this month, a viral video depicting hyper-realistic cakes as
            everyday items had folks on social media double-guessing every other
            post, and sometimes even their own realities, effectively launching
            the next meme : “Is this real or is this cake?”
          </div>
          <div className="flex ">
            <p className="w-[94px] h-5 text-zinc-800 text-[13px] font-normal font-['Poppins'] leading-snug">
              2 hours ago
            </p>
            <div className="w-[210px] h-5 opacity-70 text-zinc-800 text-[13px] font-normal font-['Poppins'] leading-snug">
              By Lucy Hiddleston | 4min read
            </div>
          </div>
        </div>
      </div>
      <div className="mx-32 my-11 flex items-center justify-center h-20 bg-red-700">
        <p className="text-white text-xl font-medium font-['Poppins']">
          Kanye West says he's running for president in 2020.
        </p>
      </div>
    </>
  );
}

export default App;
