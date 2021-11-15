import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/splitter">Splitter</Link>
        </li>
        <li>
          <Link to="/generator">Generator</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
