import React, { useEffect, useState } from 'react';
import { BsCheck, BsPlayFill } from 'react-icons/bs';
import { HiPlusSm } from 'react-icons/hi';
import { useParams, useLocation, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import { db } from '../utils/firebase';

function Details() {
  const [detail, setDetail] = useState([]);
  const [watchlisted, setWatchlisted] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const { user } = useAuth();
  const [addList, setAddList] = useState(false);

  const ids = watchlisted.map((fav) =>
    String(fav._document.data.value.mapValue.fields.id.integerValue),
  );

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        (snapshot) => setWatchlisted(snapshot.docs),
      );
    }
  }, [db, user]);

  const listHandler = async () => {
    if (ids.includes(String(detail.id))) {
      await deleteDoc(
        doc(db, 'customers', user.uid, 'myList', String(detail?.id)),
      );
    } else {
      await setDoc(
        doc(db, 'customers', user.uid, 'myList', String(detail?.id)),
        {
          ...detail,
        },
      );
    }
  };

  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          state?.deliver === undefined
            ? state.movie.video === undefined
              ? 'tv'
              : 'movie'
            : state?.deliver.video === undefined
            ? 'tv'
            : 'movie'
        }/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      );
      const data = await response.json();
      await setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-h-full">
        <Header />
        <img
          src={`${IMG_BASE_URL}${detail?.backdrop_path}`}
          alt=""
          className="relative min-h-[85vh] md:min-h-[44vh] min-w-full z-10 opacity-50"
        />
        <div className="absolute top-24 md:top-20 left-9 z-10 lg:left-16 text-white space-y-4 text-sm xl:text-base xl:top-44">
          <p className="text-4xl font-bold">{detail.name || detail.title}</p>
          <p>
            <span className="font-semibold">Release date:</span>{' '}
            {detail.first_air_date || detail.release_date}
          </p>
          {detail.number_of_seasons ? (
            <p>
              <span className="font-semibold">Seasons:</span>{' '}
              {detail?.number_of_seasons}
            </p>
          ) : (
            <p>
              <span className="font-semibold">Seasons:</span> Movie
            </p>
          )}
          <p>
            <span className="font-semibold">Original language:</span>{' '}
            {detail.original_language}
          </p>
          <p>
            <span className="font-semibold">Type:</span>{' '}
            {detail.length === 0 ? '' : detail.genres[0].name}
          </p>
          <div className="pt-2 flex space-x-4">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-white/50 lg:px-7 lg:py-3">
              <BsPlayFill className="w-8 h-8" />{' '}
              <span className="tracking-wider">PLAY</span>
            </button>
            <Link
              to={`/watch/${detail?.id}`}
              state={{ detail: detail }}
              className="flex items-center bg-black text-white px-4 lg:px-5 rounded-md font-semibold hover:bg-white hover:text-black border"
            >
              <span className="tracking-wider text-sm">TRAILER</span>
            </Link>
            <button onClick={listHandler}>
              {!ids.includes(String(detail.id)) ? (
                <HiPlusSm
                  className="w-11 h-11 border-2 rounded-full hover:bg-white hover:text-black"
                  onClick={() =>
                    setAddList(ids.includes(String(detail.id)) ? false : true)
                  }
                />
              ) : (
                <BsCheck
                  className="w-11 h-11 border-2 rounded-full hover:bg-white hover:text-black"
                  onClick={() =>
                    setAddList(ids.includes(String(detail.id)) ? false : true)
                  }
                />
              )}
            </button>
          </div>
          <p className="max-w-md text-sm md:max-w-xl xl:text-xl font-semibold">
            {detail.overview}
          </p>
        </div>
        <div className="min-h-[37vh] md:min-h-[0] lg:min-h-[0]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Details;
