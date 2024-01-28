import React from "react";

export default function Input({
  type,
  onChangeHandler,
  placeholder,
  isDefault,
  value,
  className,
}: {
  type: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value: string;
  isDefault?: boolean;
  className?: string;
}) {
  return isDefault ? (
    <input
      type={type}
      onChange={onChangeHandler}
      placeholder={placeholder}
      defaultValue={value}
      className={className}
    />
  ) : (
    <input
      type={type}
      onChange={onChangeHandler}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
}
