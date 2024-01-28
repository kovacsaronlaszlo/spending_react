import React from "react";

type OptionType = {
  value: string;
  title: string;
};

export default function Select({
  options,
  onChangeHandler,
  defaultValue,
  className
}: {
  options: OptionType[];
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
  defaultValue: string;
  className?: string
}) {
  return (
    <select value={defaultValue} onChange={onChangeHandler} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
