import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
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
          <Route
            path="splitter"
            element={
              <Splitter submitUserInput={submitUserInput} />
            }
          />
          <Route path="generator" element={<Generator keywords={keywords} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

// add photo credit: Photo by <a href="https://unsplash.com/@riverse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DEAR</a> on <a href="https://unsplash.com/s/photos/slot-machine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
