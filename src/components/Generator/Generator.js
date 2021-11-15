import './Generator.css';

type GeneratorProps = {
  keywords: string[];
}

const Generator = ({ keywords }: GeneratorProps) => {
  const keywordsNew = ['test1', 'test2'];
  const inputBoxes = keywordsNew.map((keyword) => (
    <input
      type="text"
      value={keyword}
      key={keyword}
    />
  ));
  console.log(inputBoxes);

  return (
    <main>
      <h2>test</h2>
      <input type="text" />
      { inputBoxes }
    </main>
  );
};

export default Generator;
