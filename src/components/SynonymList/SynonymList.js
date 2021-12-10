import { useState, useEffect } from 'react';
import './SynonymList.css';
import getSynonyms from '../../apiCalls';

type SynonymListProps = {
  keyword: string,
  handleSelection: () => void,
  index: number,
}

export default function SynonymList({ keyword, handleSelection, index }: SynonymListProps) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    handleSelection(event, index);
    setSelectedWord(event.target.value);
  };
  let synonymRadioBtns;

  useEffect(() => {
    getSynonyms(keyword)
      .then((synonymsFound) => {
        setLoading(false);
        if (synonymsFound) {
          setSynonyms(synonymsFound.slice(0, 20));
        }
      });
  }, [keyword]);

  if (synonyms.length) {
    synonymRadioBtns = synonyms.map((synonym) => (
      <div key={synonym} className="synonym-radio-btn">
        <input
          type="radio"
          id={synonym}
          name={keyword}
          value={synonym}
          checked={synonym === selectedWord}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor={synonym}>{synonym}</label>
      </div>
    ));
  }

  return (
    <div className="synonym-list-box">
      <input
        className="cy-synonym-radio-btn"
        type="radio"
        name={keyword}
        value={keyword}
        checked={keyword === selectedWord}
        onChange={(event) => handleChange(event)}
        key={keyword}
      />
      <label htmlFor={keyword}>{keyword}</label>
      { (!synonymRadioBtns && !loading)
        ? (
          <div className="error-message-box">
            <h4>
              No synonyms found. Please try another keyword.
            </h4>
          </div>
        )
        : synonymRadioBtns }
    </div>
  );
}
