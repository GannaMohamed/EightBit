import React from "react";
import "./Select.css";

const Select = ({ options, selectedOptions, handleOptionClick }) => {
  return (
    <div className="multi-select">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleOptionClick(option.value)}
          className={`Button Select ${
            selectedOptions.includes(option.value) ? "selected" : ""
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Select;
