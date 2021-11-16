import { useState, useEffect } from 'react';
import './KeywordBox.css';
import getSynonyms from '../../apiCalls';
export default function KeywordBox({
  keyword,
  handleSelection,
  index
}) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  const [synonyms, setSynonyms] = useState([]);

  const handleChange = e => {
    handleSelection(e, index);
    setSelectedWord(e.target.value);
  };

  let synonymRadioBtns;
  useEffect(() => {
    getSynonyms(keyword).then(synonymsFound => setSynonyms(synonymsFound.slice(0, 25)));
  }, [keyword]);

  if (synonyms.length) {
    synonymRadioBtns = synonyms.map(synonym => /*#__PURE__*/React.createElement("div", {
      className: "synonym-radio-btn"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      id: synonym,
      name: keyword,
      value: synonym,
      checked: synonym === selectedWord,
      onChange: e => handleChange(e),
      key: synonym
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: synonym
    }, synonym)));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "keyword-box"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: keyword,
    value: keyword,
    checked: keyword === selectedWord,
    onChange: e => handleChange(e),
    key: keyword
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: keyword
  }, keyword), !synonymRadioBtns ? /*#__PURE__*/React.createElement("h2", null, "Loading...") : synonymRadioBtns);
}