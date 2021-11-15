import * as React from 'react';
import './App.css';
import Header from '../Header/Header';
import Splitter from '../Splitter/Splitter';

function App(): React.Node {
  const [keywords, setKeywords] = React.useState('');
  return (
    <div className="App">
      <Header />
      { !keywords && <Splitter handleSubmit={setKeywords} /> }
    </div>
  );
}

export default App;
