import { Link } from 'react-router-dom';
import './Instructions.css';
export default function Instructions() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to You Name It!"), /*#__PURE__*/React.createElement("h3", null, "This is the name generator that works with YOU"), /*#__PURE__*/React.createElement("h3", null, "to name for your next product, project, website.. you name it!"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Think of some keywords that come to mind"), /*#__PURE__*/React.createElement("li", null, "Enter them into the generator on the next page"), /*#__PURE__*/React.createElement("li", null, "I will riff off whatever you give me"), /*#__PURE__*/React.createElement("li", null, "Select what you like and I will put your name together")), /*#__PURE__*/React.createElement("h3", null, "It is that easy!"), /*#__PURE__*/React.createElement(Link, {
    to: "/generate"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "To the generator!")));
}