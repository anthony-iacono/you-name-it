import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import History from '../History/History';
import Splitter from '../Splitter/Splitter';
import Layout from '../Layout/Layout';
import Generator from '../Generator/Generator';
import NoMatch from '../NoMatch/NoMatch';

export default function App(): React.Node {
  const [keywords, setKeywords] = useState([]);
  const [prevNames, setPrevNames] = useState([]);
  const submitUserInput = (userInput) => {
    setKeywords(userInput);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Splitter submitUserInput={submitUserInput} />}
        />
        <Route
          path="results"
          element={<Generator keywords={keywords} />}
        />
        <Route
          path="history"
          element={<History history={prevNames} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
