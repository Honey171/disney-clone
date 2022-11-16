import React, { useEffect, useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';

import ReactPlayer from 'react-player/youtube';
import Header from '../components/Header';

function Watch() {
  const [deliver, setDeliver] = useState([]);
  const [url, setUrl] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    fetchVideo();
    setDeliver(state.detail);
  }, []);

  const fetchVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          state.detail.video === undefined ? 'tv' : 'movie'
        }/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      );
      const { results } = await response.json();
      await setUrl(results);
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <Link
          to={`/detail/${deliver.id}`}
          state={{ deliver }}
          className="text-white fixed z-50 top-20 left-8 hover:shadow-2xl hover:text-xl"
        >
          Back {deliver.original_title || deliver.original_name}
        </Link>
      </div>
      <div className="mt-32 w-full min-h-screen">
        {url ? (
          <div className="player-wrapper min-h-[80vh] md:min-h-[60vh]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${
                url[0] !== undefined && url ? url[0]?.key : ''
              }`}
              width="100%"
              height="100%"
              controls={true}
              className="react-player"
            />
          </div>
        ) : (
          <div>
            <p className="text-4xl text-white">There is no trailer</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watch;
