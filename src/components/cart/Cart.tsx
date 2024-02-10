import heart from "../../assets/images/heartFill.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { calculateTimeAgo } from "../../utility/calculateTimeAgo";
import { truncateText } from "../../utility/truncateText";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Article, fetchArticles } from "../../redux/slice/articleSlice";
import ArticleModal from "../modal/ArticleModal";

interface CartProps {
  initialDisplayCount: number;
}

const Cart: React.FC<CartProps & { selectedCategory: string }> = ({
  initialDisplayCount,
  selectedCategory,
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const dispatch = useAppDispatch();
  const {
    data: articles,
    isLoading,
    isError,
  } = useAppSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);

    setShowModal(true);
  };

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const filterArticles = (article: Article) => {
    switch (selectedCategory) {
      case "latest":
        return true;
      case "world":
        return article.section.toLowerCase() === "world";
      case "opinion":
        return article.section.toLowerCase() === "opinion";
      case "u.s.":
        return article.section.toLowerCase() === "u.s.";
      default:
        return true;
    }
  };

  const categoryItemCount = articles
    ? articles.filter((article) => filterArticles(article)).length
    : 0;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh] bg-transparent">
        <div aria-label="Loading..." role="status">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-20 h-20 stroke-black"
          >
            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
          </svg>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-2xl text-red-500 bg-transparent">
        Error: {isError}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1920px] mx-auto xl:px-28 md:px-16 sm:px-10 px-4 gap-8">
        {articles &&
          articles
            .filter(filterArticles)
            .slice(0, displayCount)
            .map((article) => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="flex flex-col justify-between h-full col-span-1 cursor-pointer shadow-lg shadow-[rgba(42, 42, 42, 0.24)]  bg-white hover:scale-105 border border-gray-200 rounded-md overflow-hidden"
              >
                <div className="flex flex-col gap-3">
                  {article.media &&
                  article.media.length > 0 &&
                  article.media[0]["media-metadata"] ? (
                    <div className="overflow-hidden relative">
                      <img
                        src={article.media[0]["media-metadata"][2].url}
                        alt="article-img"
                        className="w-full md:h-[246px] object-cover"
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden relative">
                      <img
                        src="https://via.placeholder.com/440x293"
                        alt="article-img"
                        className="w-full md:h-[246px] object-cover"
                      />
                    </div>
                  )}

                  <div className="px-4 flex flex-col gap-3">
                    <h1 className="text-customBlack text-lg font-semibold font-ibm-serif">
                      {article.title}
                    </h1>
                    <p className="text-customBlack text-md font-normal font-nunito-sans">
                      {truncateText(article.abstract)}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-7 my-4 px-4">
                    <p className="text-customBlack text-[13px] font-normal font-poppins leading-snug">
                      {calculateTimeAgo(article.published_date)}
                    </p>
                    <p className="opacity-60 text-customBlack text-[13px] font-normal font-poppins leading-snug">
                      {article.byline} | 4min read
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-center items-center my-3 gap-5">
                    <div className="flex gap-1">
                      <img src={heart} alt="heart icon" />
                      <p className="opacity-70 text-customBlack text-[10px] font-medium font-poppine">
                        28
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <img src={download} width={13} alt="download icon" />
                      <p className="opacity-70 text-customBlack text-[10px] font-medium font-poppine">
                        72
                      </p>
                    </div>
                    <div>
                      <img src={save} width={13} alt="save icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {categoryItemCount > displayCount && (
        <div className="my-10 flex justify-center">
          <Button text="View More" outline onClick={handleViewMore} />
        </div>
      )}
      <ArticleModal
        showModal={showModal}
        setShowModal={setShowModal}
        article={selectedArticle}
      />
    </>
  );
};

export default Cart;
