// @flow
import { useState } from 'react';
import './Splitter.css';

type SplitterProps = {
  handleSubmit: (string) => void;
}

const Splitter = ({ handleSubmit }: SplitterProps) => {
  const [keywords, setKeywords] = useState('');
  return (
    <main>
      <form className="form cy-form" onSubmit={(e) => handleSubmit(e, keywords)}>
        <input
          aria-label="keywords"
          className="input cy-input"
          type="text"
          placeholder="enter keywords here"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button className="button cy-button" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Splitter;
