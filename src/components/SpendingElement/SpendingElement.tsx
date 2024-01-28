import { useState } from "react";
import { CurrencyEnum, InputEnum, Spending } from "../../types/types";
import { Button, DateComponent, Input, NumberFormatter } from "..";
import {
  deleteSpendingAsync,
  updateSpending,
} from "../../slices/spendingSlice";
import { useAppDispatch } from "../../hooks";

import "./SpendingElement.css";

export default function SpendingElement({ spending }: { spending: Spending }) {
  const dispatch = useAppDispatch();
  const [update, setUpdate] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(spending.description);
  const [amount, setAmount] = useState<number>(spending.amount);
  const handleDelete = (id: number) => {
    dispatch(deleteSpendingAsync(id));
  };

  const handleUpdate = (spending: Spending) => {
    dispatch(updateSpending(spending));
  };
  return (
    <li className="spending-element flex jc-sb">
      {update ? (
        <>
          <div className="flex spending-element-info">
            <div className="spending-element-icon flex">
              {spending.currency === CurrencyEnum.HUF ? "Ft" : "$"}
            </div>
            <div className="spending-element-info-text flex">
              <Input
                type={InputEnum.TEXT}
                onChangeHandler={(e) => setDescription(e.target.value)}
                value={spending.description}
                isDefault
              />
              <DateComponent date={spending.spent_at} />
            </div>
          </div>

          <div className="spending-element-buttonContainer flex">
            <b className="flex">
              {spending.currency === CurrencyEnum.HUF ? "Ft" : "$"}{" "}
              <Input
                type={InputEnum.NUMBER}
                onChangeHandler={(e) => setAmount(Number(e.target.value))}
                value={String(spending.amount)}
                isDefault
              />
            </b>

            <Button
              title="Save"
              onClickHandler={() => {
                handleUpdate({
                  ...spending,
                  description: description,
                  amount: amount,
                });
                setUpdate(false);
              }}
            />
            <Button title="Cancel" onClickHandler={() => setUpdate(false)} />
          </div>
        </>
      ) : (
        <>
          <div className="flex spending-element-info">
            <div className="spending-element-icon flex">
              {spending.currency === CurrencyEnum.HUF ? "Ft" : "$"}
            </div>
            <div className="spending-element-info-text flex">
              <p>{spending.description}</p>
              <DateComponent date={spending.spent_at} />
            </div>
          </div>
          <div className="spending-element-buttonContainer flex">
            <b className="flex">
              {spending.currency === CurrencyEnum.HUF ? "Ft" : "$"}{" "}
              <NumberFormatter num={spending.amount} />
            </b>

            <Button title="✎" onClickHandler={() => setUpdate(true)} />
            <Button
              title="X"
              onClickHandler={() => handleDelete(spending.id)}
            />
          </div>
        </>
      )}
    </li>
  );
}
