// @flow
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Splitter.css';

type SplitterProps = {
  setKeywords: (string) => void;
}

const Splitter = ({ setKeywords }: SplitterProps) => {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const splitKeywords = userInput.split(' ');
    setKeywords(splitKeywords);
  };
  return (
    <main>
      <form className="form cy-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          aria-label="keywords"
          className="input cy-input"
          type="text"
          placeholder="enter keywords here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Link to="/generator">
          <button className="button cy-button" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </main>
  );
};

export default Splitter;
