// @flow
import { useState } from 'react';
import './Splitter.css';

type SplitterProps = {
  handleSubmit: (string) => void;
}

const Splitter = ({ handleSubmit }: SplitterProps) => {
  const [keywords, setKeywords] = useState('');
  return (
    <>
      <form onSubmit={() => handleSubmit(keywords)}>
        <input
          type="text"
          placeholder="enter keywords here"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Splitter;
