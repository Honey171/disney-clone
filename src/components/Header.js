import React, { useState, useEffect } from 'react';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { GoPlus, GoSignOut } from 'react-icons/go';
import { RiMovie2Fill } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

function Header() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const logoutHandler = () => {
    logout().then(navigate('/'));
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
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

  return (
    <div
      className={
        !isScrolled
          ? 'flex flex-row top-0 right-0 left-0 pb-3 pt-3 fixed z-30 min-w-[45vh]'
          : 'flex flex-row top-0 right-0 left-0 pb-3 pt-3 fixed z-30 min-w-[45vh] bg-[#0e0b14]'
      }
    >
      <div className="flex flex-row items-center text-white space-x-0 font-semibold text-sm md:space-x-6 md:ml-6 ml-0">
        <Link to="/home">
          <img
            src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/2867c47cdae53ce5c529e0f27cd9b0b04c15c911/public/images/logo.svg"
            alt="logo"
            className="w-20 h-11"
          />
        </Link>

        <div className="space-x-10 pl-8 items-center flex-row flex cursor-pointer">
          <Link to="/home">
            <div className="flex flex-row items-center space-x-3 hover:underline hover:underline-offset-8">
              <AiFillHome className="w-4 h-4" />
              <p className="hidden lg:inline-block">HOME</p>
            </div>
          </Link>
          <Link to="/search">
            <div className="flex flex-row items-center space-x-3 hover:underline hover:underline-offset-8">
              <CgSearch className="w-4 h-4" />
              <p className="hidden lg:inline-block">SEARCH</p>
            </div>
          </Link>
          <Link to="/watchlist">
            <div className="flex flex-row items-center space-x-3 hover:underline hover:underline-offset-8">
              <GoPlus className="w-4 h-4" />
              <p className="hidden lg:inline-block">WATCHLIST</p>
            </div>
          </Link>
          <span className="inline lg:hidden">
            <div>
              <BsThreeDotsVertical
                className="w-5 h-5"
                onClick={() => {
                  setHover(!hover);
                }}
              />
              <ul className="translate-y-2 -translate-x-6 space-x-4 lg:flex">
                {hover && (
                  <div className="flex flex-col bg-[#131313] w-[160px] h-[125px] absolute justify-center space-y-4 rounded-md border border-gray-500 pl-4 transition transform duration-300">
                    <li className="flex flex-row items-center space-x-1 hover:underline hover:underline-offset-4">
                      <AiFillStar className="w-4 h-4" />
                      <p>ORIGINALS</p>
                    </li>
                    <Link
                      to="/movies"
                      className="flex flex-row items-center space-x-1 hover:underline hover:underline-offset-4"
                    >
                      <RiMovie2Fill className="w-4 h-4" />
                      <p>MOVIES</p>
                    </Link>
                    <Link
                      to="/series"
                      className="flex flex-row items-center space-x-1 hover:underline hover:underline-offset-4"
                    >
                      <img
                        src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/2867c47cdae53ce5c529e0f27cd9b0b04c15c911/public/images/series-icon.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                      <p>SERIES</p>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </span>
          <span>
            <div className="hidden flex-row items-center space-x-3 hover:underline hover:underline-offset-8 lg:flex">
              <AiFillStar className="w-4 h-4" />
              <p>ORIGINALS</p>
            </div>
          </span>
          <span>
            <Link
              to="/movies"
              className="hidden flex-row items-center space-x-3 hover:underline hover:underline-offset-8 lg:flex"
            >
              <RiMovie2Fill className="w-4 h-4" />
              <p>MOVIES</p>
            </Link>
          </span>
          <Link to="/series">
            <div className="hidden flex-row items-center space-x-3 hover:underline hover:underline-offset-8 lg:flex">
              <img
                src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/2867c47cdae53ce5c529e0f27cd9b0b04c15c911/public/images/series-icon.svg"
                alt=""
                className="w-5 h-5"
              />
              <p>SERIES</p>
            </div>
          </Link>
        </div>
        <div className="absolute right-5 flex items-center space-x-3 text-white text-sm">
          <span className="hidden xl:inline">{user?.email}</span>
          <img
            src="https://i.pinimg.com/originals/7d/06/5a/7d065af29b8f0b5a52af49aa6dd860bb.png"
            alt="avatar"
            className="w-12 h-11 border-2 border-[transparent] rounded-full"
          />
          <GoSignOut
            className="w-5 h-5 cursor-pointer"
            onClick={logoutHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
