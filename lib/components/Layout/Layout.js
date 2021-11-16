import { Link, Outlet } from 'react-router-dom';
import './Layout.css';
export default function Layout() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/generate"
  }, "Generate")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/collaborate"
  }, "Collaborate"))), /*#__PURE__*/React.createElement(Outlet, null));
}