import { render, fireEvent } from "@testing-library/react";
import { Input } from "../components";

test("renders input with correct attributes and handles onChange", () => {
  const type = "text";
  const onChangeHandler = jest.fn();
  const value = "test value";
  const placeholder = "Enter text";
  const isDefault = true;

  const { getByPlaceholderText } = render(
    <Input
      type={type}
      onChangeHandler={onChangeHandler}
      value={value}
      placeholder={placeholder}
      isDefault={isDefault}
    />
  );
  const input = getByPlaceholderText(placeholder);

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", type);
  expect(input).toHaveValue(value);

  fireEvent.change(input, { target: { value: "new value" } });

  expect(onChangeHandler).toHaveBeenCalledTimes(1);
});
