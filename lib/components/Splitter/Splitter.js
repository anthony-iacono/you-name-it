import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Splitter.css';
export default function Splitter({
  submitUserInput
}) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = e => {
    // e.preventDerfault();
    const splitKeywords = userInput.split(' ');
    submitUserInput(splitKeywords);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    className: "form cy-form"
  }, /*#__PURE__*/React.createElement("input", {
    "aria-label": "keywords",
    className: "input cy-input",
    type: "text",
    placeholder: "enter keywords here",
    value: userInput,
    onChange: e => setUserInput(e.target.value)
  }), /*#__PURE__*/React.createElement(Link, {
    to: "/generate"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button cy-button",
    type: "submit",
    onClick: e => handleSubmit(e)
  }, "Submit"))));
}