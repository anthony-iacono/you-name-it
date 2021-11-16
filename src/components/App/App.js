import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import KeywordSplitter from '../KeywordSplitter/KeywordSplitter';
import Generator from '../Generator/Generator';
import Favorites from '../Favorites/Favorites';
import NoMatch from '../NoMatch/NoMatch';

export default function App(): React.Node {
  const [keywords, setKeywords] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const submitUserInput = (userInput) => {
    setKeywords(userInput);
  };

  const addFavorite = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (oldFavorite) => {
    setFavorites(favorites.filter((favorite) => favorite !== oldFavorite));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<KeywordSplitter submitUserInput={submitUserInput} />}
        />
        <Route
          path="results"
          element={<Generator keywords={keywords} addFavorite={addFavorite} />}
        />
        <Route
          path="favorites"
          element={(
            <Favorites
              favorites={favorites}
              removeFavorite={removeFavorite}
            />
          )}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
