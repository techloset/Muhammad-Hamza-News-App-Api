import React, { useEffect, useState } from "react";
import searchImg from "../../assets/images/searchIcon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  SearchResponse,
  fetchSearchResults,
} from "../../redux/slice/searchSlice";
import { useNavigate } from "react-router-dom";
import { truncateText } from "../../utility/truncateText";
import { calculateTimeAgo } from "../../utility/calculateTimeAgo";

import heart from '../../assets/images/heart.svg'
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import Button from "../../components/button/Button";
import SearchModal from "../../components/modal/SearchModal";
import Container from "../../components/container/Container";

export function mergeUrl(baseUrl: string, relativePath: string) {
  const base = new URL(baseUrl);
  const mergedUrl = new URL(relativePath, base);
  return mergedUrl.toString();
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.search.searchResults);
  const isLoading = useAppSelector((state) => state.search.isLoading);
  const isError = useAppSelector((state) => state.search.isError);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<SearchResponse | null>(
    null
  );
  
  const urlSearchParams = new URLSearchParams(window.location.search);
  const queryParam = urlSearchParams.get("q");
  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      } catch (error) {}
    } else {
      alert("Please enter a search query");
    }
  };
  useEffect(() => {
    if (queryParam && queryParam.trim() !== "") {
      dispatch(fetchSearchResults(queryParam));
    } else {
      navigate("/search");
    }
  }, [queryParam]);

  const handleArticleClick = (article: SearchResponse) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKeyPress as any);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress as any);
    };
  }, [searchQuery]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[60vh] md:h[80vh] gap-12">
        <div className="text-zinc-800 text-3xl md:text-4xl lg:text-5xl font-ibm-serif font-semibold">
          Search News
        </div>
        <form onSubmit={handleSearch} className="relative cursor-pointer">
          <input
            id="searchInput"
            placeholder="Enter your search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" w-72 sm:w-[500px] md:w-[550px] lg:w-[800px] py-4 bg-white bg-opacity-90 pr-4 pl-14 cursor-pointer border-slate-400 text-zinc-800 font-nunito-sans focus:border-slate-300"
          />
          <img
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            src={searchImg}
            width={20}
            onClick={handleSearch}
            alt="search icon"
          />
        </form>
      </div>
      {isLoading && (
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
              className="animate-spin w-20 h-20 text-black"
            >
              <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
            </svg>
          </div>
        </div>
      )}
    
        {!isLoading && !isError && searchResults && (
          <>
            <Container>
            <div className="flex justify-between items-center h-[54px] bg-white mb-3 px-3 bg-opacity-90 backdrop-blur-[28px]">
              <div className=" text-zinc-800 text-lg font-semibold font-poppins mx-3">
                Search Results
              </div>
            </div>
            </Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1920px] mx-auto 2xl:px-[277px] xl:px-36 md:px-16 sm:px-10 px-4 gap-8">
              {searchResults &&
                searchResults.slice(0, displayCount).map((article) => (
                  <div
                    key={article._id}
                    onClick={() => handleArticleClick(article)}
                    className="flex flex-col justify-between h-full col-span-1 cursor-pointer shadow-lg shadow-[rgba(42, 42, 42, 0.24)] bg-white hover:scale-105 border border-gray-200 rounded-md overflow-hidden"
                  >
                    <div className="flex flex-col gap-2">
                      {article.multimedia &&
                      article.multimedia.length > 0 &&
                      article.multimedia[0] ? (
                        <div className="overflow-hidden h-60 relative">
                          <img
                            src={mergeUrl(
                              "https://static01.nyt.com/",
                              article.multimedia[0].url
                            )}
                            alt="article-img"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="overflow-hidden h-60 relative">
                          <img
                            src="https://via.placeholder.com/440x293"
                            alt="article-img"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="p-3 flex flex-col gap-3">
                        <h1 className="text-zinc-800 text-lg font-semibold font-ibm-serif">
                          {truncateText(article.headline.main)}
                        </h1>
                        <p className="text-zinc-800 text-md font-normal font-nunito-sans">
                          {truncateText(article.abstract)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-7 my-4 px-3 font-poppins text-zinc-800 font-normal text-[13px]">
                        <p className="leading-snug">
                          {calculateTimeAgo(article.pub_date)}
                        </p>
                        <p className="opacity-60 leading-snug">
                          {article.byline.original} | 4min read
                        </p>
                      </div>
                      <hr />
                      <div className="flex justify-center items-center my-3 gap-5">
                        <div className="flex gap-1">
                          <img src={heart} alt="heart icon" />
                          <p className="text-zinc-800 text-[10px] font-poppins font-medium">
                            28
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <img src={download} width={13} alt="download icon" />
                          <p className="text-zinc-800 text-[10px] font-poppins font-medium">
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
          </>
        )}

        {searchResults && searchResults.length > displayCount && (
          <div className="my-10 flex justify-center">
            <Button text="View More" outline onClick={handleViewMore} />
          </div>
        )}
   
      
      {isError && (
        <div className="flex justify-center items-center h-[70vh] text-2xl text-red-500 bg-transparent">
          Error: {isError}
        </div>
      )}
      {!isError && searchResults && searchResults.length === 0 && (
        <div className="flex justify-center items-center h-[70vh] text-4xl text-red-600 bg-transparent">
          data not found...
        </div>
      )}
      <SearchModal
        showModal={showModal}
        setShowModal={setShowModal}
        article={selectedArticle}
      />
    </>
  );
};

export default Search;
