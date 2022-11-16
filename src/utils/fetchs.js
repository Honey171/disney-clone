import React, { useEffect, useState } from 'react';

function Row() {
  const [comedy, setComedy] = useState([]);

  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetchComedy();
    fetchCrime();
    fetchAction();
    fetchAnimation();
    fetchDocumentary();
    fetchDrama();
    fetchHorror();
    fetchWar();
    fetchScience();
  }, []);

  const fetchAction = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10759&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchAnimation = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchComedy = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setComedy(results);
  };

  const fetchCrime = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=80&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchDocumentary = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchDrama = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchHorror = async () => {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=27`,
    );
    const { results } = await response.json();
  };

  const fetchScience = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };

  const fetchWar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10768&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
  };
}
