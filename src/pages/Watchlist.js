import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { useAuth } from '../hooks/useAuth';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Watchlist() {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

  const { user } = useAuth();
  const [id, setId] = useState([]);

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        (snapshot) => {
          setId(snapshot.docs);
        },
      );
    }
  }, [user]);

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="mt-32">
            <h1 className="text-5xl text-white ml-20 font-semibold">
              Watchlist
            </h1>
            <p className=" text-white ml-20 mt-8 font-semibold">
              My movies & series
            </p>

            <div className="mx-auto max-w-full mt-10 gap-6 flex flex-row flex-wrap justify-center">
              {id.map((fav, idx) => (
                <div
                  to={`/detail/${fav._document.data.value.mapValue.fields.id.integerValue}`}
                  state={{ fav: fav._document.data.value.mapValue.fields }}
                  key={idx}
                >
                  <img
                    src={`${IMG_BASE_URL}${
                      fav._document.data.value.mapValue.fields.backdrop_path
                        .stringValue ||
                      fav._document.data.value.mapValue.fields.poster_path
                        .stringValue
                    }`}
                    alt=""
                    className="w-80 h-44 transition duration-200 ease-out  md:hover:scale-105 rounded-sm hover:border-[3px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 min-h-[37vh] md:min-h-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Watchlist;
