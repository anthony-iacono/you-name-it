import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Instructions</Link>
        </li>
        <li>
          <Link to="/form">Generate</Link>
        </li>
        <li>
          <Link to="/results">Collaborate</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
