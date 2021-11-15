import { useState, useEffect } from 'react';
import './Generator.css';
import KeywordBox from '../KeywordBox/KeywordBox';

type GeneratorProps = {
  keywords: string[];
}

export default function Generator({ keywords }: GeneratorProps) {
  // const keywordsNew = ['test1', 'test2'];
  // const [generatorKeywords, setGeneratorKeywords] = useState([]);
  let inputBoxes;
  if (keywords) {
    inputBoxes = keywords.map((keyword) => (
      <KeywordBox keyword={keyword} key={keyword} />
    ));
  }

  return (
    <div>
      <h2>generator here</h2>
      { !inputBoxes.length ? <h2>Loading...</h2> : inputBoxes }
    </div>
  );
}
