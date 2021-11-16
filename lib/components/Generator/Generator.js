import { useState } from 'react';
import './Generator.css';
import KeywordBox from '../KeywordBox/KeywordBox';
export default function Generator({
  keywords
}) {
  const [selectedWords, setSelectedWords] = useState(keywords);

  const handleSelection = (e, i) => {
    setSelectedWords(prevState => {
      const newState = prevState.slice();
      newState[i] = e.target.value;
      return newState;
    });
  };

  let inputBoxes;

  if (keywords) {
    inputBoxes = keywords.map((keyword, i) => /*#__PURE__*/React.createElement(KeywordBox, {
      keyword: keyword,
      handleSelection: handleSelection,
      key: keyword,
      index: i
    }));
  }

  const generatedName = selectedWords.join(' ');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, generatedName), /*#__PURE__*/React.createElement("div", {
    className: "inputBoxContainer"
  }, !inputBoxes.length ? /*#__PURE__*/React.createElement("h2", null, "Loading...") : inputBoxes));
}