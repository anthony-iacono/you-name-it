import './KeywordBox.css';

type KeywordBoxProps = {
  keyword: string;
}

export default function KeywordBox({ keyword }: KeywordBoxProps) {
  return (
    <input
      type="text"
      value={keyword}
      key={keyword}
    />
  );
}
