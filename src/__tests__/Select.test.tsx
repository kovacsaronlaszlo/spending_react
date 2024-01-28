import { render, fireEvent, screen } from "@testing-library/react";
import { Select } from "../components";

const sampleOptions = [
  { value: "option1", title: "Option 1" },
  { value: "option2", title: "Option 2" },
  { value: "option3", title: "Option 3" },
];

test("renders select options with correct attributes and handles onChange", async () => {
  const defaultValue = "option2";
  const onChangeHandler = jest.fn();

  render(
    <Select
      options={sampleOptions}
      defaultValue={defaultValue}
      onChangeHandler={onChangeHandler}
    />
  );
  screen.debug();

  const selectElement = screen.getByRole("combobox") as HTMLSelectElement;

  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toHaveValue(defaultValue);

  fireEvent.change(selectElement, { target: { value: "option3" } });

  expect(onChangeHandler).toHaveBeenCalledTimes(1);
});
