import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import KeywordSplitter from '../KeywordSplitter/KeywordSplitter';
import Generator from '../Generator/Generator';
import Favorites from '../Favorites/Favorites';
import NoMatch from '../NoMatch/NoMatch';
export default function App() {
  const [keywords, setKeywords] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const submitUserInput = userInput => {
    setKeywords(userInput);
  };

  const addFavorite = newFavorite => {
    setFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = oldFavorite => {
    setFavorites(favorites.filter(favorite => favorite !== oldFavorite));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(KeywordSplitter, {
      submitUserInput: submitUserInput
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "results",
    element: /*#__PURE__*/React.createElement(Generator, {
      keywords: keywords,
      addFavorite: addFavorite
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "favorites",
    element: /*#__PURE__*/React.createElement(Favorites, {
      favorites: favorites,
      removeFavorite: removeFavorite
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NoMatch, null)
  })));
}