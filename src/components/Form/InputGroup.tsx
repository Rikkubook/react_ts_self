import React from "react";
import { ChangeEvent, useEffect } from "react";

const { useState } = React;

type Props = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  onInputChange: (key: string, value: string) => void;
  currentStep?: number;
};

function InputGroup({
  label,
  id,
  type,
  placeholder,
  onInputChange,
  currentStep,
}: Props) {
  const [value, setValue] = useState(""); // 為了及時顯示

  const changeValue = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    console.log("changeValue");
    setValue(event.target.value);
    onInputChange(id, event.target.value); // 為了即時給父層連動
  };
  useEffect(() => {
    setValue("");
  }, [currentStep]);

  return (
    <>
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
        onChange={(e) => changeValue(id, e)}
      />
    </>
  );
}

export default InputGroup;
