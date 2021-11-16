import { Link } from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch() {
  return (
    <div className="message">
      <h2>The page you are looking for does not exist</h2>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  );
}
