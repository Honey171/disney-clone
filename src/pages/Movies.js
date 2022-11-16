import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { BsChevronDown } from 'react-icons/bs';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [inner, setInner] = useState('');
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moviess, setMoviess] = useState([]);

  const navigate = useNavigate();

  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    fetchMovies();
    fetchMoviess();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchMovies = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(`
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${value}&with_watch_monetization_types=flatrate`);
      const { results } = await response.json();
      await setMovies(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchMoviess = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(`
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=${value}&with_watch_monetization_types=flatrate`);
      const { results } = await response.json();
      await setMoviess(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div
        className={`fixed z-20 w-[100%] pt-8 pb-8 top-16 flex flex-row space-x-6 items-center ${
          isScrolled ? 'bg-[#171a24]' : ''
        }`}
      >
        <p className="text-3xl ml-8 text-white font-semibold md:text-5xl">
          Movies
        </p>
        <div
          className={`rounded-full ${
            menu ? 'bg-[#0e0e15]' : 'bg-[gray]/40'
          } w-[130px] h-[35px] mt-2 hover:bg-[#0e0e15]`}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <span className="relative top-2 flex items-center justify-around text-white text-sm capitalize">
            {inner.length < 30 ? `${inner}` : 'Mixed'}{' '}
            <p className={`${isSelected ? 'hidden' : ''}`}>Mixed</p>
            <BsChevronDown className="w-4 h-4" />
          </span>
          <div
            className={`bg-[#131313] absolute top-24 pt-6 pb-5 rounded-md w-[175px] text-white/60 space-y-1 uppercase text-xs  font-bold ${
              menu ? 'visible' : 'invisible'
            } z-50`}
            onClick={(e) => {
              if (e.target.classList.contains('option')) {
                setInner(e.target.innerHTML);
              } else {
                return;
              }
              setIsSelected(true);
              fetchMovies(e.target.value);
              fetchMoviess(e.target.value);
            }}
          >
            <option
              value="28"
              id="Action"
              className="option"
            >
              Action
            </option>
            <option
              value="16"
              className="option"
            >
              Animation
            </option>
            <option
              value="35"
              className="option"
            >
              Comedy
            </option>
            <option
              value="80"
              className="option"
            >
              Crime
            </option>
            <option
              value="99"
              className="option"
            >
              Documentary
            </option>
            <option
              value="18"
              className="option"
            >
              Drama
            </option>
            <option
              value="14"
              className="option"
            >
              Fantasy
            </option>
            <option
              value="36"
              className="option"
            >
              History
            </option>
            <option
              value="27"
              className="option"
            >
              Horror
            </option>
            <option
              value="9648"
              className="option"
            >
              Mystery
            </option>
            <option
              value="10749"
              className="option"
            >
              Romance
            </option>
            <option
              value="878"
              className="option"
            >
              Science Fiction
            </option>
            <option
              value="10752"
              className="option"
            >
              War
            </option>
            <option
              value="37"
              className="option"
            >
              Western
            </option>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full mt-48 gap-6 flex flex-row flex-wrap justify-center mb-8">
        {movies.map((movie, idx) => (
          <Link
            className="mt-3"
            to={`/detail/${movie.id}`}
            state={{ movie }}
            key={idx}
          >
            {!loading && (
              <img
                src={`${IMG_BASE_URL}${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt=""
                className="w-80 h-44 transition duration-200 ease-out  md:hover:scale-105 rounded-sm hover:border-[3px]"
              />
            )}
          </Link>
        ))}
        {moviess.map((movie, idx) => (
          <Link
            className="mt-3"
            to={`/detail/${movie.id}`}
            state={{ movie }}
            key={idx}
          >
            {!loading && (
              <img
                src={`${IMG_BASE_URL}${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt=""
                className="w-80 h-44 transition duration-200 ease-out  md:hover:scale-105 rounded-sm hover:border-[3px]"
              />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
