import React from "react";
import { ChangeEvent } from "react";

const { useState } = React;

interface Props {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  onInputChange: (key: string, value: string) => void;
}

function InputGroup({ label, id, type, placeholder, onInputChange }: Props) {
  const [value, setValue] = useState("");

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onInputChange(id, value);
  };

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="form-input"
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => changeValue(e)}
      />
    </div>
  );
}

export default InputGroup;
