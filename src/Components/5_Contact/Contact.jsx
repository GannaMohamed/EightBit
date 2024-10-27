import React, { useState } from "react";
import SplitScreen from "../general/SplitScreen";
import Select from "./Select";
import { TextField, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { includeValidForm } from "./includeValidForm";
import "./Contact.css";
import Media from "../Media/Media";

export default function Contact() {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const handleOptionClick = (value) => {
  //   if (selectedOptions.includes(value)) {
  //     setSelectedOptions(selectedOptions.filter((option) => option !== value));
  //   } else {
  //     setSelectedOptions([...selectedOptions, value]);
  //   }
  // };

  const onSubmit = (formData) => {
    const form = new FormData();
    // form append every value
    for (const key in formData) {
      form.append(key, formData[key]);
    }
  };

  return (
    <div className="centered ">
      <SplitScreen>
        <h1 className="ContactHeading">Contact</h1>
        <div className="FormContainer">
          <form>
            <h2 className="FormHeading">Get In Touch</h2>
            <Form onSubmit={onSubmit} />
          </form>
        </div>
      </SplitScreen>{" "}
    </div>
  );
}

export const Form = includeValidForm(
  ({
    formData,
    onChangeData,
    selectedOptions,
    handleOptionClick,
    onSubmit,
    errors,
    isValid,
  }) => {
    const {
      name,
      email,
      timeline,
      estimatedBudget,
      projectServices,
      projectInfo,
    } = formData || {};

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true); // Mark the form as submitted
      onSubmit(formData); // Call parent submit handler
    };

    return formData ? (
      <>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {/* Project Services */}
              <Grid item size={12}>
                <label htmlFor="projectServices">
                  What Are You Looking For?
                </label>
                <Select
                  options={[
                    { value: "Branding", label: "Branding" },
                    { value: "Web", label: "Website" },
                    { value: "Mobile", label: "Mobile App" },
                    { value: "Else", label: "Something Else" },
                  ]}
                  selectedOptions={selectedOptions}
                  handleOptionClick={handleOptionClick}
                />
                {errors.projectServices && (
                  <p className="error">{errors.projectServices}</p>
                )}
              </Grid>

              {/* Name field */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <label htmlFor="NameInput">What’s Your Name?</label>
                <TextField
                  fullWidth
                  id="NameInput"
                  value={name}
                  onChange={(e) => onChangeData({ name: e.target.value })}
                  error={Boolean(errors.name)}
                  ذ
                  helperText={errors.name}
                />
              </Grid>

              {/* Email field */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <label htmlFor="EmailInput">What’s Your Email?</label>
                <TextField
                  fullWidth
                  id="EmailInput"
                  value={email}
                  onChange={(e) => onChangeData({ email: e.target.value })}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>

              {/* Estimated Time field */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <label htmlFor="EstimatedTimeInput">
                  What’s Your Timeline?
                </label>
                <TextField
                  fullWidth
                  id="EstimatedTimeInput"
                  value={timeline}
                  onChange={(e) => onChangeData({ timeline: e.target.value })}
                  error={Boolean(errors.timeline)}
                  helperText={errors.timeline}
                />
              </Grid>

              {/* Budget field */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <label htmlFor="BudgetInput">
                  What’s Your Estimated Budget?
                </label>
                <TextField
                  fullWidth
                  id="BudgetInput"
                  value={estimatedBudget}
                  onChange={(e) =>
                    onChangeData({ estimatedBudget: e.target.value })
                  }
                  error={Boolean(errors.estimatedBudget)}
                  helperText={errors.estimatedBudget}
                />
              </Grid>

              {/* More About the Project field */}
              <Grid item size={12}>
                <label htmlFor="ProjectInfoInput">
                  Tell Us About Your Project.
                </label>
                <TextField
                  fullWidth
                  id="ProjectInfoInput"
                  value={projectInfo}
                  onChange={(e) =>
                    onChangeData({ projectInfo: e.target.value })
                  }
                  multiline
                  rows={4}
                  error={Boolean(errors.projectInfo)}
                  helperText={errors.projectInfo}
                />
              </Grid>
            </Grid>
          </Box>

          <div className="centered">
            <button
              className={`Submit Button my-4 ${isSubmitted ? "Submitted" : ""}`}
              type="submit"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
          <div className="centered w-100">
            <Media />
          </div>
        </form>
      </>
    ) : (
      <>Loading...</>
    );
  }
);
