import { useState, useEffect } from 'react';
import './KeywordBox.css';
import getSynonyms from '../../apiCalls';

type KeywordBoxProps = {
  keyword: string,
  handleSelection: () => void,
  index: number,
}

export default function KeywordBox({ keyword, handleSelection, index }: KeywordBoxProps) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  const [synonyms, setSynonyms] = useState([]);
  const handleChange = (e) => {
    handleSelection(e, index);
    setSelectedWord(e.target.value);
  };
  let synonymRadioBtns;
  useEffect(() => {
    getSynonyms(keyword)
      .then((synonymsFound) => (
        setSynonyms(synonymsFound.slice(0, 25))
      ));
  }, [keyword]);
  if (synonyms.length) {
    synonymRadioBtns = synonyms.map((synonym) => (
      <div className="synonym-radio-btn">
        <input
          type="radio"
          id={synonym}
          name={keyword}
          value={synonym}
          checked={synonym === selectedWord}
          onChange={(e) => handleChange(e)}
          key={synonym}
        />
        <label htmlFor={synonym}>{synonym}</label>
      </div>
    ));
  }
  return (
    <div className="keyword-box">
      <input
        type="radio"
        name={keyword}
        value={keyword}
        checked={keyword === selectedWord}
        onChange={(e) => handleChange(e)}
        key={keyword}
      />
      <label htmlFor={keyword}>{keyword}</label>
      { !synonymRadioBtns
        ? <h4>Could not come up with anything for this word. Please try another</h4>
        : synonymRadioBtns }
    </div>
  );
}
