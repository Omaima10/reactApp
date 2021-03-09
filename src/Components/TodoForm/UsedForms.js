import React, { useState } from "react";

const UsedForms = ({ action, label, name }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      alert("Please fill the form before submitting");
      return;
    }
    action(value);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div class=" form-group row h-100 justify-content-center align-items-center">
      <form className="w-50" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={value}
          placeholder={name}
        />
        <div>
          <button className="btn btn-dark font-italic font-weight-bold">
            {label}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsedForms;
