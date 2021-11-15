import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Splitter from '../Splitter/Splitter';
import Generator from '../Generator/Generator';

function App(): React.Node {
  const [keywords, setKeywords] = React.useState([]);
  const submitUserInput = (userInput) => {
    setKeywords(userInput);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Splitter setKeywords={submitUserInput} />}
        />
        <Route
          path="/generator"
          element={<Generator keywords={keywords} />}
        />
      </Routes>
    </div>
  );
}

export default App;

// add photo credit: Photo by <a href="https://unsplash.com/@riverse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">DEAR</a> on <a href="https://unsplash.com/s/photos/slot-machine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
