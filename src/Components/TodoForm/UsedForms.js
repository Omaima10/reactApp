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
    <div>
      <label>{name}</label>
      <form id="todoF" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={handleChange}
          value={value}
        />
        <button>{label}</button>
      </form>
    </div>
  );
};

export default UsedForms;
