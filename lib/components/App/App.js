import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Splitter from '../Splitter/Splitter';
import Generator from '../Generator/Generator';

function App() {
  const [keywords, setKeywords] = React.useState('');

  const handleSubmit = (e, userKeywords) => {
    e.preventDefault();
    const splitKeywords = userKeywords.split(' ');
    setKeywords(splitKeywords);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(Splitter, {
      handleSubmit: handleSubmit
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/generator",
    element: /*#__PURE__*/React.createElement(Generator, {
      keywords: keywords
    })
  }))));
}

export default App; // add photo credit: Photo by <a href="https://unsplash.com/@riverse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DEAR</a> on <a href="https://unsplash.com/s/photos/slot-machine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>