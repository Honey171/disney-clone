import React, { useState, useEffect } from 'react';

import BigCarousel from '../components/BigCarousel';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Row from '../components/Row';

function Home() {
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [crime, setCrime] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [drama, setDrama] = useState([]);
  const [war, setWar] = useState([]);
  const [science, setScience] = useState([]);

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
    await setAction(results);
  };

  const fetchAnimation = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setAnimation(results);
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
    await setCrime(results);
  };

  const fetchDocumentary = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setDocumentary(results);
  };

  const fetchDrama = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setDrama(results);
  };

  const fetchHorror = async () => {
    const response = await fetch(
      `
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    );
    const { results } = await response.json();
    await setHorror(results);
  };

  const fetchScience = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setScience(results);
  };

  const fetchWar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10768&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    );
    const { results } = await response.json();
    await setWar(results);
  };

  return (
    <div>
      <Header />
      <BigCarousel />
      <Brands />
      <Row
        title="Crime"
        data={crime}
      />
      <Row
        title="Drama"
        data={drama}
      />
      <Row
        title="Sci-Fİ & Fantasy"
        data={science}
      />
      <Row
        title="War & Politics"
        data={war}
      />
      <Row
        title="Documentary"
        data={documentary}
      />
      <Row
        title="Horror"
        data={horror}
      />
      <Row
        title="Comedy"
        data={comedy}
      />
      <Row
        title="Action & Adventure"
        data={action}
      />
      <Row
        title="Animation"
        data={animation}
      />
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
