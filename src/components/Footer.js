import React from 'react';

function Footer() {
  return (
    <div className="max-w-full pt-8 pb-8 bg-[#0e0b14] flex flex-col justify-center items-center space-y-4 text-white text-xs">
      <div>
        <p>This clone for educational purpose</p>
      </div>
      <div>
        <img
          src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/2867c47cdae53ce5c529e0f27cd9b0b04c15c911/public/images/logo.svg"
          alt="logo"
          className="w-20 h-11 cursor-pointer"
        />
      </div>
      <div className="flex flex-row justify-around flex-wrap space-x-4 space-y-4 -translate-y-4 md:space-x-4">
        <p className="pt-4 cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Cookies Policy</p>
        <p className="cursor-pointer">EMEA Privacy Rights</p>
        <p className="cursor-pointer">Subscriber Agreement</p>
        <p className="cursor-pointer">Help</p>
        <p className="cursor-pointer">Supported Devices</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Interest-based Ads</p>
        <p className="cursor-pointer">Manage Preferences</p>
      </div>
      <div>&copy; Disney. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
