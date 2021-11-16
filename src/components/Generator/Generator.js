import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generator.css';
import SynonymList from '../SynonymList/SynonymList';

type GeneratorProps = {
  keywords: string[],
}

export default function Generator({ keywords }: GeneratorProps) {
  const [selectedWords, setSelectedWords] = useState(keywords);
  const generatedName = selectedWords.join(' ');

  const handleSelection = (event, index) => {
    setSelectedWords((prevState) => {
      const newState = prevState.slice();
      newState[index] = event.target.value;
      return newState;
    });
  };

  let inputBoxes;
  if (keywords) {
    inputBoxes = keywords.map((keyword, index) => (
      <SynonymList
        keyword={keyword}
        handleSelection={handleSelection}
        key={keyword}
        index={index}
      />
    ));
  }

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
