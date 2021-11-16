import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generator.css';
import SynonymList from '../SynonymList/SynonymList';
export default function Generator({
  keywords
}) {
  const [selectedWords, setSelectedWords] = useState(keywords);
  const generatedName = selectedWords.join(' ');

  const handleSelection = (event, index) => {
    setSelectedWords(prevState => {
      const newState = prevState.slice();
      newState[index] = event.target.value;
      return newState;
    });
  };

  let inputBoxes;

  if (keywords) {
    inputBoxes = keywords.map((keyword, index) => /*#__PURE__*/React.createElement(SynonymList, {
      keyword: keyword,
      handleSelection: handleSelection,
      key: keyword,
      index: index
    }));
  }

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Link, {
    to: "history"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "History")), /*#__PURE__*/React.createElement("h2", {
    className: "generated-name"
  }, generatedName), /*#__PURE__*/React.createElement("div", {
    className: "inputBoxContainer"
  }, !keywords.length && /*#__PURE__*/React.createElement("h2", null, "Please go back a step and add some keywords."), keywords.length && !inputBoxes.length ? /*#__PURE__*/React.createElement("h2", null, "Loading...") : inputBoxes));
}