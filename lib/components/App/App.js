import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';
import Splitter from '../Splitter/Splitter';
import Layout from '../Layout/Layout';
import Generator from '../Generator/Generator';
import NoMatch from '../NoMatch/NoMatch';
export default function App() {
  const [keywords, setKeywords] = useState([]);

  const submitUserInput = userInput => {
    setKeywords(userInput);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(Instructions, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "generate",
    element: /*#__PURE__*/React.createElement(Splitter, {
      submitUserInput: submitUserInput
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "collaborate",
    element: /*#__PURE__*/React.createElement(Generator, {
      keywords: keywords
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NoMatch, null)
  }))));
}