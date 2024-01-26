import React from "react";

type OptionType = {
  value: string;
  title: string;
};

export default function Select({
  options,
  onChangeHandler,
}: {
  options: OptionType[];
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select onChange={onChangeHandler}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
