import React from "react";
import { ChangeEvent } from "react";

const { useState } = React;

type Props = {
  label: string;
  id: string;
  check: boolean;
  onInputChange: (key: string, value: string | boolean) => void;
  isError?: boolean;
  errorMsg?: string;
};

function InputCheckbox({
  label,
  id,
  check,
  onInputChange,
  isError,
  errorMsg,
}: Props) {
  // 使用狀態來管理 checkbox 的值
  const [isChecked, setIsChecked] = useState(check);

  const changeValue = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onInputChange(id, event.target.checked); // 為了即時給父層連動
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        <input
          className="form-checkbox"
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={(e) => changeValue(id, e)}
        />
        {label}
      </label>
      {isError && <p className="form-error">{errorMsg}</p>}
    </>
  );
}

export default InputCheckbox;
