import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Splitter from '../Splitter/Splitter';

function App(): React.Node {
  const [keywords, setKeywords] = React.useState('');

  const handleSubmit = (e, userKeywords) => {
    e.preventDefault();
    const splitKeywords = userKeywords.split(' ');
    setKeywords(splitKeywords);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Splitter handleSubmit={handleSubmit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
