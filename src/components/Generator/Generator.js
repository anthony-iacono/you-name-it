import './Generator.css';

type GeneratorProps = {
  keywords: string[];
}

const Generator = ({ keywords }: GeneratorProps) => {
  console.log('keywords: ', keywords);
  const inputBoxes = keywords.map((keyword) => (
    <input
      type="text"
      value={keyword}
    />
  ));

  return (
    <main>
      { inputBoxes }
    </main>
  );
};

export default Generator;
