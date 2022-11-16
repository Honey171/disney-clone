import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Link } from 'react-router-dom';

function BigCarousel() {
  const [popular, setPopular] = useState([]);

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    );
    const { results } = await response.json();
    await setPopular(results);
  };

  return (
    <div className="mx-auto relative mt-24 shadow-2xl max-w-screen-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {popular.map((movie, idx) => (
          <Link
            to={`/detail/${movie.id}`}
            state={{ movie }}
            key={idx}
          >
            <p className="absolute text-red-600 left-10 top-10 text-2xl font-bold shadow-lg">
              {movie.name}
            </p>
            <img
              loading="lazy"
              src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
              alt=""
              className="h-[250px] lg:h-[475px] "
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default BigCarousel;
