import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generator.css';
import KeywordBox from '../KeywordBox/KeywordBox';

type GeneratorProps = {
  keywords: string[],
}

export default function Generator({ keywords }: GeneratorProps) {
  const [selectedWords, setSelectedWords] = useState(keywords);
  const handleSelection = (e, i) => {
    setSelectedWords((prevState) => {
      const newState = prevState.slice();
      newState[i] = e.target.value;
      return newState;
    });
  };
  let inputBoxes;
  if (keywords) {
    inputBoxes = keywords.map((keyword, i) => (
      <KeywordBox
        keyword={keyword}
        handleSelection={handleSelection}
        key={keyword}
        index={i}
      />
    ));
  }

  const generatedName = selectedWords.join(' ');

  return (
    <main>
      <Link to="history">
        <button type="button">History</button>
      </Link>
      <h2 className="generated-name">{generatedName}</h2>
      <div className="inputBoxContainer">
        { !keywords.length && <h2>Please go back a step and add some keywords.</h2> }
        { keywords.length && !inputBoxes.length
          ? <h2>Loading...</h2>
          : inputBoxes }
      </div>
    </main>
  );
}
