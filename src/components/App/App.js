import * as React from 'react';
import './App.css';
import Header from '../Header/Header';
import Splitter from '../Splitter/Splitter';

function App(): React.Node {
  const [keywords, setKeywords] = React.useState('');

  const handleSubmit = (userKeywords) => {
    const splitKeywords = userKeywords.split(' ');
    setKeywords(splitKeywords);
  };

  return (
    <div className="App">
      <Header />
      { !keywords && <Splitter handleSubmit={handleSubmit} /> }
    </div>
  );
}

export default App;
