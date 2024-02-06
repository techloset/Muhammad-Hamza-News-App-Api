import menu2 from "../../assets/images/menu2.png";
import React, { useState, useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { useAppSelector } from "../../redux/hooks";
import { Article } from "../../redux/slice/articleSlice";
import Button from "../button/Button";


const categories = [
  { name: "latest", title: "Latest Stories" },
  { name: "opinion", title: "Opinion" },
  { name: "world", title: "World" },
  { name: "u.s.", title: "U.S" }
];

const CartSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("latest");
  const [categoryItemCount, setCategoryItemCount] = useState<number>(6);

  const { data: articles } = useAppSelector((state) => state.article);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCategoryItemCount(6);
  };

  useEffect(() => {
    if (articles) {
      const categoryArticles = articles.filter(
        (article: Article) => article.section.toLowerCase() === selectedCategory
      );
      setCategoryItemCount(categoryArticles.length);
    }
  }, [articles, selectedCategory]);

  return (
    <>
      <div className="flex justify-between items-center h-[54px] bg-white mb-3 max-w-[1920px] mx-0 xl:mx-28 md:mx-16 px-4 bg-opacity-90 backdrop-blur-[28px]">
        <div className="flex gap-6 md:gap-9 mx-3 md:mx-0 text-zinc-800 text-lg font-semibold font-poppins">
         {
            categories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer ${selectedCategory === category.name ? "border-b-4 border-red-500" : ""}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.title}
              </div>
            ))
         }
        </div>
        <div className="hidden md:block cursor-pointer">
          <img src={menu2} alt="" />
        </div>
      </div>
      <Cart initialDisplayCount={6} selectedCategory={selectedCategory} />
      {categoryItemCount > 6 && (
        <div className="my-10 flex justify-center">
          <Button text="View More" outline onClick={() => setCategoryItemCount((prevCount) => prevCount + 6)} />
        </div>
      )}
    </>
  );
};

export default CartSection;
