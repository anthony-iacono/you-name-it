import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Splitter.css';

type SplitterProps = {
  submitUserInput: (string) => void;
}

export default function Splitter({ submitUserInput }: SplitterProps) {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    const splitKeywords = userInput.split(' ');
    submitUserInput(splitKeywords);
  };
  return (
    <div>
      <form className="form cy-form">
        <input
          aria-label="keywords"
          className="input cy-input"
          type="text"
          placeholder="enter keywords here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Link to="/results">
          <button
            className="button cy-button"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
