import { Link } from 'react-router-dom';
import './NoMatch.css';
export default function NoMatch() {
  return /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, /*#__PURE__*/React.createElement("h2", null, "The page you are looking for does not exist"), /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Home")));
}