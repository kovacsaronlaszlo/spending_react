import { render, fireEvent } from "@testing-library/react";

import { Button } from "../components";

test("renders button with correct title and calls onClickHandler", () => {
  const title = "Click me";
  const onClickHandler = jest.fn();

  const { getByText } = render(
    <Button title={title} onClickHandler={onClickHandler} />
  );
  const button = getByText(title);

  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
