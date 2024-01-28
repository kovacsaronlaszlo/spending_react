import { render, fireEvent } from "@testing-library/react";
import { Radio } from "../components";

const sampleRadios = [
  { value: "option1", title: "Option 1" },
  { value: "option2", title: "Option 2" },
  { value: "option3", title: "Option 3" },
];

test("renders radio options with correct attributes and handles onChange", () => {
  const filteredOption = "option2";
  const onChangeHandler = jest.fn();
  const name = "radioGroup";

  const { getByLabelText } = render(
    <Radio
      radios={sampleRadios}
      filteredOption={filteredOption}
      onChangeHandler={onChangeHandler}
      name={name}
    />
  );

  sampleRadios.forEach((radio) => {
    const radioInput = getByLabelText(radio.title) as HTMLInputElement;

    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute("type", "radio");
    expect(radioInput).toHaveAttribute("name", name);
    expect(radioInput.checked).toEqual(radio.value === filteredOption);

    fireEvent.click(radioInput);

    expect(onChangeHandler).toHaveBeenCalled();
  });
});
