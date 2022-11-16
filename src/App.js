import { Routes, Route } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Series from './pages/Series';
import Sign from './pages/Sign';
import Watch from './pages/Watch';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/detail/:id"
        element={<Details />}
      />
      <Route
        path="/movies"
        element={<Movies />}
      />
      <Route
        path="/series"
        element={<Series />}
      />
      <Route
        path="/sign"
        element={<Sign />}
      />
      <Route
        path="/watchlist"
        element={<Watchlist />}
      />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route
        path="/watch/:id"
        element={<Watch />}
      />
    </Routes>
  );
}

export default App;
