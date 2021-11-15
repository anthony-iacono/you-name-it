import { useState } from 'react';
import './Generator.css';

type GeneratorProps = {
  keywords: string[];
}

export default function Generator({ keywords }: GeneratorProps) {
  // const keywordsNew = ['test1', 'test2'];
  const [generatorKeywords, setGeneratorKeywords] = useState([]);
  let inputBoxes;
  if (keywords) {
    inputBoxes = keywords.map((keyword) => (
      <input
        type="text"
        value={keyword}
        key={keyword}
      />
    ));
  }
  console.log(inputBoxes);

  return (
    <main>
      <h2>generator</h2>
      { inputBoxes.length === 0 ? <h2>Loading...</h2> : inputBoxes }
    </main>
  );
}
