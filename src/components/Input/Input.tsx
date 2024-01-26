import React from "react";

export default function Input({
  type,
  onChangeHandler,
  placeholder,
}: {
  type: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}) {
  return (
    <input type={type} onChange={onChangeHandler} placeholder={placeholder} />
  );
}
