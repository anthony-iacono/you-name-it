import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import KeywordSplitter from '../KeywordSplitter/KeywordSplitter';
import Generator from '../Generator/Generator';
import NoMatch from '../NoMatch/NoMatch';

export default function App(): React.Node {
  const [keywords, setKeywords] = useState([]);
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
          element={<KeywordSplitter submitUserInput={submitUserInput} />}
        />
        <Route
          path="results"
          element={<Generator keywords={keywords} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
