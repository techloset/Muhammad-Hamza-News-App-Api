import React, { MouseEvent } from "react";
import heart from "../../assets/images/heart.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import homeImg from "../../assets/images/homeImg.png";
import { SearchResponse } from "../../redux/slice/searchSlice";
import { calculateTimeAgo } from "../../utility/calculateTimeAgo";
import { mergeUrl } from "../../pages/search/Search";
import crossImg from "../../assets/images/crossIcon.svg";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  article: SearchResponse | null;
}

const SearchModal: React.FC<ModalProps> = (props) => {
  const { showModal, setShowModal, article } = props;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center m-8 pt-20 fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleCloseModal}
          >
            <div
              className="mx-auto max-w-6xl relative flex max-h-[550px] md:max-h-[600px] border-0 rounded-lg bg-white w-full overflow-y-auto outline-none focus:outline-none"
              onClick={handleModalClick}
            >
              <div className="grid md:grid-cols-2 pt-8 px-4 md:p-8 items-center">
                <div
                  className="absolute top-1 right-1 md:top-2 md:right-2 opacity-70 w-6 h-6 md:w-9 md:h-9 hover:bg-zinc-200 rounded-full cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <img src={crossImg} alt="" />
                </div>

                <img
                  className="w-full rounded-md h-60 md:h-96 object-cover"
                  alt="artical image"
                  src={mergeUrl(
                    "https://static01.nyt.com/",
                    article?.multimedia?.[0]?.url ?? homeImg
                  )}
                />
                <div className="relative max-w-auto my-5 md:ml-14">
                  <div className="flex items-center justify-between">
                    <p className="text-red-700 text-sm font-semibold font-poppins leading-[29.40px] tracking-tight">
                      Trending
                    </p>
                    <div className="hidden md:block">
                      <div className="flex gap-4">
                        <img
                          className="cursor-pointer"
                          src={heart}
                          height={44}
                          alt="heart-icon"
                        />
                        <img className="cursor-pointer" src={download} alt="download icon" />
                        <img className="cursor-pointer" src={save} alt="save icon" />
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl md:text-[20px] lg:text-[32px] text-black font-semibold my-3 font-ibm-serif md:mr-9">
                    <h1>{article?.headline.main}</h1>
                  </div>

                  <div className="max-h-96 overflow-y-auto md:mr-9">
                    <p className="text-[15px] font-normal font-poppins leading-normal">
                      {article?.abstract}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-6 pb-6 md:pb-0 mt-4 items-center md:flex-row">
                    <p className="w-[94px] h-5 text-[13px] font-normal font-poppins leading-snug">
                      {calculateTimeAgo(article?.pub_date ?? "")}
                    </p>
                    <p className="w-[210px] h-5 opacity-60 text-[13px] font-normal font-poppins leading-snug">
                      {article?.byline.original} | 4min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-40 fixed inset-0 mt-[75px] z-40 bg-black"
            onClick={handleCloseModal}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default SearchModal;
