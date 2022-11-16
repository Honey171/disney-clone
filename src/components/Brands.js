import React from 'react';

import disney from '../assets/videos/disney.mp4';
import marvel from '../assets/videos/marvel.mp4';
import national from '../assets/videos/national-geographic.mp4';
import pixar from '../assets/videos/pixar.mp4';
import starwars from '../assets/videos/star-wars.mp4';

import disneyPNG from '../assets/photos/disney.png';
import marvelPNG from '../assets/photos/marvel.png';
import nationalPNG from '../assets/photos/national-geographic.png';
import pixarPNG from '../assets/photos/pixar.png';
import starwarsPNG from '../assets/photos/starwars.png';

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group">
        <img
          src={disneyPNG}
          alt=""
          className="object-cover absolute z-10"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover relative"
        >
          <source
            src={disney}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="brand group">
        <img
          src={pixarPNG}
          className="object-cover absolute z-10"
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover relative"
        >
          <source
            src={pixar}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="group brand">
        <img
          src={marvelPNG}
          className="object-cover absolute z-10"
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover relative"
        >
          <source
            src={marvel}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="brand group">
        <img
          src={starwarsPNG}
          className="object-cover absolute z-10"
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover relative"
        >
          <source
            src={starwars}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="brand group">
        <img
          src={nationalPNG}
          className="object-cover absolute z-10"
          alt=""
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source
            src={national}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default Brands;
