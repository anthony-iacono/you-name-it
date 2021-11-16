import './History.css';

type HistoryProps = {
  prevNames: string[],
}

export default function History({ prevNames }: HistoryProps) {
  const prevNameListItems = prevNames.map((prevName) => <li>prevName</li>);
  return (
    <div>
      <ul>
        { !prevNameListItems ? <h2>Loading...</h2> : prevNameListItems }
      </ul>
    </div>
  );
}
