import './Generator.css';

const Generator = ({
  keywords
}) => {
  const inputBoxes = keywords.map(keyword => /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: keyword
  }));
  return /*#__PURE__*/React.createElement("main", null, inputBoxes);
};

export default Generator;