import React from "react";

export default function Button({
  title,
  onClickHandler,
  disabled
}: {
  title: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean
}) {
  return <button onClick={onClickHandler} disabled={disabled}>{title}</button>;
}
