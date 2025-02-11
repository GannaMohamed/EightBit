import React, { useState } from "react";
import "./Select.css";
import { TextField } from "@mui/material";

const Select = ({
  options,
  selectedOptions,
  handleOptionClick,
  handleElseChange,
  elseValue,
  onChangeData,
}) => {
  const [showElseInput, setShowElseInput] = useState(
    selectedOptions.includes("Else")
  );

  return (
    <div>
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
      {selectedOptions.includes("Else") && (
        <TextField
          fullWidth
          id="ElseInput"
          className="my-2"
          value={elseValue}
          onChange={(e) => {
            handleElseChange(e.target.value);
          }}
          placeholder="Please specify"
        />
      )}
    </div>
  );
};

export default Select;
