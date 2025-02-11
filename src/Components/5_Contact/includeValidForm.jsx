import { useState } from "react";

export const includeValidForm = (Component) => {
  return (props) => {
    const initialForm = {
      name: "",
      email: "",
      timeline: "",
      estimatedBudget: 0,
      type: [], // Sync with selected options
      projectInfo: "",
    };

    const [formData, setFormData] = useState({ ...initialForm });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const validate = (field, value) => {
      let errorMessage = "";

      switch (field) {
        case "name":
          if (!value) {
            errorMessage = "Name is required.";
          }
          break;
        case "email":
          if (!value) {
            errorMessage = "Email is required.";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            errorMessage = "Invalid email format.";
          }
          break;
        // case "timeline":
        //   if (!value) {
        //     errorMessage = "Timeline is required.";
        //   }
        //   break;
        // case "estimatedBudget":
        //   if (!value || isNaN(value)) {
        //     errorMessage = "Estimated budget should be a valid number.";
        //   }
        //   break;
        case "type":
          if (value.length === 0) {
            errorMessage = "Please select at least one service.";
          }
          break;
        // case "projectInfo":
        //   if (!value || value.length < 20) {
        //     errorMessage = "Project info must be at least 20 characters.";
        //   }
        //   break;
        default:
          break;
      }

      return errorMessage;
    };

    const onChangeData = (updates) => {
      const updatedForm = { ...formData, ...updates };
      setFormData(updatedForm);

      const field = Object.keys(updates)[0];
      const errorMessage = validate(field, updates[field]);
      setErrors({ ...errors, [field]: errorMessage });

      // Check if the entire form is valid
      const isFormValid = Object.values(updatedForm).every(
        (value, index) => !validate(Object.keys(updatedForm)[index], value)
      );
      setIsValid(isFormValid);
    };

    const onResetForm = () => {
      setFormData({ ...initialForm });
      setSelectedOptions([]);
      setErrors({});
    };

    // Sync selectedOptions with formData.type
    const handleOptionClick = (value) => {
      let updatedOptions;
      if (value === "Else") {
        if (selectedOptions.includes("Else")) {
          updatedOptions = selectedOptions.filter(
            (option) => option !== "Else"
          );
          onChangeData({ elseType: "" }); // Clear the input field when "Else" is removed
        } else {
          updatedOptions = [...selectedOptions, "Else"];
        }
      } else {
        if (selectedOptions.includes(value)) {
          updatedOptions = selectedOptions.filter((option) => option !== value);
        } else {
          updatedOptions = [...selectedOptions, value];
        }
      }
      setSelectedOptions(updatedOptions);
      onChangeData({ type: updatedOptions }); // Sync with formData
    };

    const handleElseChange = (e) => {
      const elseValue = e.target.value;
      const updatedOptions = selectedOptions.map((option) =>
        option === "Else" ? elseValue : option
      );

      setSelectedOptions(updatedOptions);
      onChangeData({ type: updatedOptions, elseType: elseValue });
    };

    return (
      <Component
        {...props}
        formData={formData}
        onChangeData={onChangeData}
        onResetForm={onResetForm}
        selectedOptions={selectedOptions}
        handleOptionClick={handleOptionClick}
        handleElseChange={handleElseChange}
        errors={errors}
        isValid={isValid}
      />
    );
  };
};
