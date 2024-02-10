import menu2 from "../../assets/images/menu2.svg";
import React, { useState, useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { useAppSelector } from "../../redux/hooks";
import { Article } from "../../redux/slice/articleSlice";
import Button from "../button/Button";
import Container from "../container/Container";


const categories = [
  { name: "latest", title: "Latest" },
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
    <Container>
      <div className="flex justify-between items-center h-[54px] bg-white mb-3 max-w-[1920px] mx-auto px-4 bg-opacity-90 backdrop-blur-[28px]">
        <div className="flex gap-6 md:gap-9 mx-3 md:mx-0 text-customBlack text-lg font-semibold font-poppins">
         {
            categories.map((category, index) => (
              <h2
                key={index}
                className={`cursor-pointer ${selectedCategory === category.name ? "border-b-4 border-customRed" : ""}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.title}
              </h2>
            ))
         }
        </div>
        <div className="hidden md:block cursor-pointer">
          <img src={menu2} alt="menu icon" />
        </div>
      </div>
      </Container>
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
