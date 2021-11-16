import { Link } from 'react-router-dom';
import './Favorites.css';

type FavoritesProps = {
  favorites: string[],
}

export default function Favorites({ favorites }: FavoritesProps) {
  const favoriteBoxes = favorites.map((favorite) => (
    <div className="favorite-box" key={favorite}>
      <p>{favorite}</p>
    </div>
  ));

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      { !favorites.length && (
        <p>Go back and add some favorites</p>
      )}
      {favorites.length > 0 && favoriteBoxes }
      <Link to="/results">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}
