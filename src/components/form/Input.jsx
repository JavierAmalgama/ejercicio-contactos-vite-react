import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="form-field">
        <label htmlFor={props.value}>{props.name}</label>
        <input
          type={props.type}
          id={props.value}
          name={props.value}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
