import { Link } from 'react-router-dom';
import './Favorites.css';
export default function Favorites({
  favorites,
  removeFavorite
}) {
  const favoriteBoxes = favorites.map(favorite => /*#__PURE__*/React.createElement("div", {
    className: "favorite-box",
    key: favorite
  }, /*#__PURE__*/React.createElement("p", {
    className: "favorite-text cy-favorite-text"
  }, favorite), /*#__PURE__*/React.createElement("button", {
    className: "remove-favorite-btn cy-remove-favorite-btn",
    type: "button",
    onClick: () => removeFavorite(favorite)
  }, "\u274C")));
  return /*#__PURE__*/React.createElement("div", {
    className: "favorites-container"
  }, /*#__PURE__*/React.createElement("h2", null, "Favorites"), !favorites.length && /*#__PURE__*/React.createElement("p", {
    className: "no-favorites-message cy-no-favorites-message"
  }, "Go back and add some favorites"), favorites.length > 0 && favoriteBoxes, /*#__PURE__*/React.createElement(Link, {
    to: "/results"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Back")));
}