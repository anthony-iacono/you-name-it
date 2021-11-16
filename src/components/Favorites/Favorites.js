import { Link } from 'react-router-dom';
import './Favorites.css';

type FavoritesProps = {
  favorites: string[],
}

export default function Favorites({ favorites }: FavoritesProps) {
  return (
    <div>
      <h2>Favorites</h2>
      { !favorites && (
        <>
          <p>Go back and add some favorites</p>
          <Link to="/results">
            <button type="button">Back</button>
          </Link>
        </>
      )}
    </div>
  );
}
