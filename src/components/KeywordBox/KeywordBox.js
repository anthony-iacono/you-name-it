import { useState, useEffect } from 'react';
import './KeywordBox.css';
import getSynonyms from '../../apiCalls';

type KeywordBoxProps = {
  keyword: string;
}

export default function KeywordBox({ keyword }: KeywordBoxProps) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  const [synonyms, setSynonyms] = useState([]);
  const handleChange = (e) => setSelectedWord(e.target.value);
  let synonymRadioBtns;
  useEffect(() => {
    getSynonyms(keyword)
      .then((synonymsFound) => setSynonyms(synonymsFound));
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
      { !synonymRadioBtns ? <h2>Loading...</h2> : synonymRadioBtns}
    </div>
  );
}
