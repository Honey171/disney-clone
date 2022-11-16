import React, { useState, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Row({ title, data }) {
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef(null);

  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <h1 className="mt-10 ml-8 text-white text-xl font-semibold">{title}</h1>
      <div
        className="mx-auto mt-12 max-w-full flex flex-row scrollbar-hide items-center space-x-5 overflow-x-scroll md:p-2"
        ref={rowRef}
      >
        <AiOutlineLeft
          className={`absolute left-2 z-40 m-auto h-72 w-9 cursor-pointer opacity-100 transition hover:scale-125 hover:opacity-100 text-white md:opacity-0 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        {data.map((movie, idx) => (
          <Link
            to={`/detail/${movie.id}`}
            state={{ movie }}
            className={`min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[300px] md:hover:scale-110
            ${movie?.backdrop_path || movie?.poster_path ? '' : 'hidden'}
            `}
            key={idx}
          >
            <img
              src={`${IMG_BASE_URL}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt=""
              className="w-80 h-36 md:h-44"
            />
          </Link>
        ))}
        <AiOutlineRight
          className="absolute right-2 z-20 m-auto h-72 w-9 cursor-pointer opacity-100 md:opacity-0 transition hover:scale-125 hover:opacity-100 text-white"
          onClick={() => handleClick('right')}
        />
      </div>
    </>
  );
}

export default Row;
