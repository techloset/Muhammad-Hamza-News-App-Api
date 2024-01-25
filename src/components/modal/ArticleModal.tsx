import React, { MouseEvent } from "react";
import heart from "../../assets/images/heart.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import { calculateTimeAgo } from "../../utility/calculateTimeAgo";

import crossImg from "../../assets/images/cross-icon.svg";
import { Article } from "../../redux/slice/articleSlice";


interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  article: Article | null; // Add article prop
}

const ArticleModal: React.FC<ModalProps> = (props) => {
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
                  className="absolute top-1 right-1 md:top-0 md:right-0 opacity-70 w-6 md:w-10"
                  onClick={handleCloseModal}
                >
                  <img src={crossImg} alt="" />
                </div>

                <img
                  className="w-full rounded-md h-60 md:h-96 object-cover"
                  alt=""
                  src={article?.media[0]["media-metadata"][2].url}
                />
                <div className="relative max-w-auto my-5 md:ml-14">
                  <div className="flex items-center justify-between">
                    <div className="text-red-700 text-sm font-semibold font-poppins leading-[29.40px] tracking-tight">
                      Trending
                    </div>
                    <div className="hidden md:block">
                    <div className="flex gap-4">
                      <img src={heart} height={44} alt="heart-icon" />
                      <img src={download} alt="" />
                      <img src={save} alt="" />
                    </div>
                    </div>
                  </div>
                  <div className="text-2xl md:text-[20px] lg:text-[32px] text-black font-semibold my-3 font-ibm-serif md:mr-9">
                    <h1>{article?.title}</h1>
                  </div>

                  <div className="max-h-96 overflow-y-auto md:mr-9">
                    <div className="text-[15px] font-normal font-poppins leading-normal">
                      {article?.abstract}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-6 pb-6 md:pb-0 mt-4 items-center font-poppins md:flex-row">
                    <div className="w-[94px] h-5 text-[13px] font-normal leading-snug">
                      {calculateTimeAgo(article?.published_date ?? "")}
                    </div>
                    <div className="w-[210px] h-5 opacity-60 text-[13px] font-normal leading-snug">
                      {article?.byline} | 4min read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-40 fixed mt-[75px] inset-0 z-40 bg-black"
            onClick={handleCloseModal}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default ArticleModal;