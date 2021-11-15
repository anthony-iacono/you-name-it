import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Splitter.css';

const Splitter = ({
  handleSubmit
}) => {
  const [keywords, setKeywords] = useState('');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("form", {
    className: "form cy-form",
    onSubmit: e => handleSubmit(e, keywords)
  }, /*#__PURE__*/React.createElement("input", {
    "aria-label": "keywords",
    className: "input cy-input",
    type: "text",
    placeholder: "enter keywords here",
    value: keywords,
    onChange: e => setKeywords(e.target.value)
  }), /*#__PURE__*/React.createElement(Link, {
    to: "/generator"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button cy-button",
    type: "submit"
  }, "Submit"))));
};

export default Splitter;