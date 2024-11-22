import React, { useState, useEffect } from "react";
import "./Form.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (field, value) => {
    let error = "";

    switch (field) {
      case "username":
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (!value) error = "Username is required";
        else if (users.some((user) => user.username === value))
          error = "Username already exists";
        break;

      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 8)
          error = "Password must be at least 8 characters";
        else if (!/[A-Z]/.test(value))
          error = "Password must contain at least one uppercase letter";
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
          error = "Password must contain at least one special character";
        break;

      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format";
        break;

      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^[6,7,8,9]\d{9}$/.test(value))
          error = "Phone number must starts with 6,7,8,or 9 and be 10 digits";
        break;

      case "age":
        if (!value) error = "Age is required";
        else if (!/^\d+$/.test(value))
          error = "Age must be a number";
        break;

      case "gender":
        if(value=="Select Gender") error="Gender is required"
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    if (touched[name]) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) {
        isValid = false;
        newErrors[field] = error;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...users, formData]));
    alert("User added successfully!");
    setFormData({
      username: "",
      password: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
    });
    setTouched({});
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {[
          { label: "Username *", name: "username" },
          { label: "Password *", name: "password", type: "password" },
          { label: "Email *", name: "email", type: "email" },
          { label: "Phone *", name: "phone", type: "tel" },
          { label: "Age *", name: "age", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="field">
            <label className="label">{label}</label>
            <div className="inputWrapper">
              <input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input ${
                  touched[name]
                    ? errors[name]
                      ? "input-error"
                      : "input-success"
                    : ""
                }`}
              />
              {touched[name] && !errors[name] && (
                <span className="tick">&#10003;</span>
              )}
            </div>
            {touched[name] && errors[name] && (
              <small className="error">{errors[name]}</small>
            )}
          </div>
        ))}

        <div className="field">
          <label className="label">Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${
              touched.gender
                ? errors.gender
                  ? "input-error"
                  : "input-success"
                : ""
            }`}
          >
            <option value="Select Gender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {touched.gender && errors.gender && (
            <small className="error">{errors.gender}</small>
          )}
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
