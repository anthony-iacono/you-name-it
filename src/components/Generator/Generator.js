import { useState } from 'react';
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
    <div>
      <h2>{generatedName}</h2>
      <div className="inputBoxContainer">
        { !inputBoxes.length ? <h2>Loading...</h2> : inputBoxes }
      </div>
    </div>
  );
}
