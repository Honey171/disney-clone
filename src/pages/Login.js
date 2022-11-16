import React from 'react';

import logoTop from '../assets/logo-top.svg';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="px-8 flex justify-between items-center py-2 text-white z-50 fixed w-full bg-[#030713]">
        <img
          src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/2867c47cdae53ce5c529e0f27cd9b0b04c15c911/public/images/logo.svg"
          alt="logo"
          className="w-20 h-11"
        />
        <Link
          to="/sign"
          className="border rounded-sm px-5 py-1.5 hover:bg-white hover:text-black right-0 font-semibold"
        >
          LOGIN
        </Link>
      </div>
      <div className="flex items-center justify-center">
        {' '}
        <div className="absolute z-30 top-1/4 space-y-4 max-w-2xl text-white">
          <img
            src={logoTop}
            alt="logo"
          />
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            Get all there
          </button>
          <p className="text-center">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img
            src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/main/public/images/cta-logo-two.png"
            alt="logo"
          />
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/main/public/images/hero-background.jpg"
        alt="bg"
        className="h-[100%] w-[100%] absolute"
      />
    </div>
  );
}

export default Login;
