import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/history">History</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
