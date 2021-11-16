import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generator.css';
import SynonymList from '../SynonymList/SynonymList';

type GeneratorProps = {
  keywords: string[],
  addFavorite: () => void,
}

export default function Generator({ keywords, addFavorite }: GeneratorProps) {
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
      <Link to="/favorites">
        <button className="cy-view-favorites-btn" type="button">Favorites</button>
      </Link>
      { keywords.length === 0 && (
        <>
          <h2>Please go back and add some keywords</h2>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
        </>
      )}
      { keywords.length > 0 && inputBoxes.length === 0 && <h2>Loading...</h2> }
      { keywords.length > 0 && inputBoxes.length > 0 && (
        <>
          <h2 className="generated-name cy-generated-name">{ generatedName }</h2>
          <button onClick={() => addFavorite(generatedName)} className="favorite-btn cy-favorite-btn" type="button">💛</button>
          <div className="synonyms-box cy-synonyms-box">
            { inputBoxes }
          </div>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
        </>
      )}
    </main>
  );
}
