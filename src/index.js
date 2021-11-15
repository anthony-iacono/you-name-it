import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import Generator from './components/Generator/Generator';
import NoMatch from './components/NoMatch/NoMatch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="generator" element={<Generator />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
