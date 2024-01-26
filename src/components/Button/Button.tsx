import React from "react";

export default function Button({
  title,
  onClickHandler,
}: {
  title: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={onClickHandler}>{title}</button>;
}
