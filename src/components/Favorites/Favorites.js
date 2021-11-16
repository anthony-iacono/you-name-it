import { Link } from 'react-router-dom';
import './Favorites.css';

type FavoritesProps = {
  favorites: string[],
  removeFavorite: () => void,
}

export default function Favorites({ favorites, removeFavorite }: FavoritesProps) {
  const favoriteBoxes = favorites.map((favorite) => (
    <div className="favorite-box" key={favorite}>
      <p className="favorite-text">{favorite}</p>
      <button
        className="remove-favorite-btn"
        type="button"
        onClick={() => removeFavorite(favorite)}
      >
        ❌
      </button>
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
