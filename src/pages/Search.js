import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Search() {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const [search, setSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedSeries, setSearchedSeries] = useState([]);

  useEffect(() => {
    searchingMovie();
    searchingSeries();
  },[search]);

  const searchingMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`,
    );
    const { results } = await response.json();
    await setSearchedMovies(results);
  };

  const searchingSeries = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`,
    );
    const { results } = await response.json();
    await setSearchedSeries(results);
  };

  return (
    <div className="min-h-[100vh]">
      <Header />
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="mt-16 w-full py-8 outline-none text-2xl text-clip fixed md:text-5xl pl-8 md:pl-24 bg-[#585c6a] z-20 text-white"
        placeholder="Search anything you want"
        value={search}
      />
      {search.length >= 1 && (
        <span
          className="text-white text-4xl fixed top-[95px] right-5 md:text-5xl md:top-[105px] z-40 cursor-pointer"
          onClick={() => setSearch('')}
        >
          X
        </span>
      )}
      <div className="flex items-center justify-center pt-52 flex-wrap px-8 gap-8 z-10">
        {searchedMovies?.map((movie, idx) => (
          <Link
            to={`/detail/${movie.id}`}
            state={{ movie }}
            key={idx}
            className={`cursor-pointer transition duration-200 ease-out  md:hover:scale-110
            ${movie?.backdrop_path || movie?.poster_path ? '' : 'hidden'}
            `}
          >
            <img
              src={`${IMG_BASE_URL}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt=""
              className="w-80 h-44 transition duration-200 ease-out  md:hover:scale-105 rounded-sm hover:border-[3px]"
            />
          </Link>
        ))}
        {searchedSeries?.map((movie, idx) => (
          <Link
            to={`/detail/${movie.id}`}
            state={{ movie }}
            key={idx}
            className={` cursor-pointer transition duration-200 ease-out  md:hover:scale-110 z-10
            ${movie?.backdrop_path || movie?.poster_path ? '' : 'hidden'}
            `}
          >
            <img
              src={`${IMG_BASE_URL}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt=""
              className="w-80 h-44 transition duration-200 ease-out  md:hover:scale-105 rounded-sm hover:border-[3px]"
            />
          </Link>
        ))}
      </div>
      {
        <div className={`${search.length >= 1 ? '' : 'hidden'} mt-12`}>
          <Footer />
        </div>
      }
    </div>
  );
}

export default Search;
