import { useState } from 'react';
import { Link } from 'react-router-dom';
import './KeywordSplitter.css';

type KeywordSplitterProps = {
  submitUserInput: (string) => void;
}

export default function KeywordSplitter({ submitUserInput }: KeywordSplitterProps) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = () => {
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
          placeholder="keywords"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <Link to="/results">
          <button
            className="button cy-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
