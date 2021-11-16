import { Link } from 'react-router-dom';
import './Favorites.css';
export default function Favorites({
  favorites
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Favorites"), !favorites && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Go back and add some favorites"), /*#__PURE__*/React.createElement(Link, {
    to: "/results"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Back"))));
}