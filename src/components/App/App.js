import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';
import Splitter from '../Splitter/Splitter';
import Layout from '../Layout/Layout';
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
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Instructions />} />
          <Route
            path="form"
            element={
              <Splitter submitUserInput={submitUserInput} />
            }
          />
          <Route
            path="results"
            element={<Generator keywords={keywords} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
