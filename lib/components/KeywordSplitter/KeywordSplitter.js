import { useState } from 'react';
import { Link } from 'react-router-dom';
import './KeywordSplitter.css';
export default function KeywordSplitter({
  submitUserInput
}) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = () => {
    const splitKeywords = userInput.split(' ');
    submitUserInput(splitKeywords);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "instructions"
  }, "Enter some keywords to start generating names:"), /*#__PURE__*/React.createElement("form", {
    className: "form cy-form"
  }, /*#__PURE__*/React.createElement("input", {
    "aria-label": "keywords",
    className: "input cy-input",
    type: "text",
    placeholder: "keywords",
    value: userInput,
    onChange: event => setUserInput(event.target.value)
  }), userInput && /*#__PURE__*/React.createElement(Link, {
    to: "/results"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button cy-button",
    type: "submit",
    onClick: handleSubmit
  }, "Submit"))));
}