import { useState, useEffect } from 'react';
import './SynonymList.css';
import getSynonyms from '../../apiCalls';
export default function SynonymList({
  keyword,
  handleSelection,
  index
}) {
  const [selectedWord, setSelectedWord] = useState(keyword);
  const [synonyms, setSynonyms] = useState([]);

  const handleChange = event => {
    handleSelection(event, index);
    setSelectedWord(event.target.value);
  };

  let synonymRadioBtns;
  useEffect(() => {
    getSynonyms(keyword).then(synonymsFound => setSynonyms(synonymsFound.slice(0, 20)));
  }, [keyword]);

  if (synonyms.length) {
    synonymRadioBtns = synonyms.map(synonym => /*#__PURE__*/React.createElement("div", {
      key: synonym,
      className: "synonym-radio-btn"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      id: synonym,
      name: keyword,
      value: synonym,
      checked: synonym === selectedWord,
      onChange: event => handleChange(event)
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: synonym
    }, synonym)));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "synonym-list-box"
  }, /*#__PURE__*/React.createElement("input", {
    className: "cy-synonym-radio-btn",
    type: "radio",
    name: keyword,
    value: keyword,
    checked: keyword === selectedWord,
    onChange: event => handleChange(event),
    key: keyword
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: keyword
  }, keyword), !synonymRadioBtns ? /*#__PURE__*/React.createElement("h4", null, "Please try another keyword") : synonymRadioBtns);
}