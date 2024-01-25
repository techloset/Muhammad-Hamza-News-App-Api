import React from 'react';
import Container from '../container/Container';
import searchImg from '../../assets/images/search-icon.svg';


const SearchSection = () => {
  
  return (
    <Container>
      <div className='flex flex-col justify-center items-center h-[80vh] gap-8'>
        <div className="text-zinc-800 text-5xl font-semibold">Search News</div>
        <div className='relative cursor-pointer'>
          <div className="relative">
            <input 
              id="searchInput"
              placeholder="Enter your search"   
              type="text"
              className="w-[800px] h-[54px] bg-white bg-opacity-90 backdrop-blur-[28px] pr-4 pl-16 border-slate-400 focus:border-slate-300"
            />
            <img
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              src={searchImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SearchSection;
