import { Link } from 'react-router-dom';
import './Instructions.css';

export default function Instructions() {
  return (
    <div>
      <h2>Welcome to You Name It!</h2>
      <h3>This is the name generator that works with YOU</h3>
      <h3>to name for your next product, project, website.. you name it!</h3>
      <ol>
        <li>Think of some keywords that come to mind</li>
        <li>Enter them into the generator on the next page</li>
        <li>I will riff off whatever you give me</li>
        <li>Select what you like and I will put your name together</li>
      </ol>
      <h3>It is that easy!</h3>
      <Link to="/form">
        <button type="submit">To the generator!</button>
      </Link>
    </div>
  );
}
