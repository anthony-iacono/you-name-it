import { useState } from 'react';
import './KeywordBox.css';
import getSynonyms from '../../apiCalls'; 

type KeywordBoxProps = {
  keyword: string;
}

export default function KeywordBox({ keyword }: KeywordBoxProps) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  let synonymRadioBtns;
  getSynonyms(keyword)
    .then((synonyms) => {
      synonymRadioBtns = synonyms.map((synonym) => (
        <input
          type="radio"
          name={keyword}
          value={synonym}
          checked={synonym === selectedWord}
        />
      ));
    });
  return (
    <div className="keyword-box">
      <input
        type="radio"
        name={keyword}
        value={keyword}
        checked={keyword === selectedWord}
      />
      {!synonymRadioBtns.length ? <h2>Loading...</h2> : synonymRadioBtns}
    </div>
  );
}
