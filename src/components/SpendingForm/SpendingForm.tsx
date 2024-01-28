import { useMemo, useState } from "react";
import { CurrencyEnum, InputEnum, Spending } from "../../types/types";
import { addSpendingAsync } from "../../slices/spendingSlice";
import { Button, Input, Select } from "..";
import { useAppDispatch } from "../../hooks";

import "./SpendingForm.css";

export default function SpendingForm() {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>(CurrencyEnum.HUF);

  const isSaveButtonDisabled = useMemo(() => description === "" && amount === "", [description, amount]);

  const handleSubmit = () => {
    const newSpending: Spending = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      currency,
      spent_at: new Date().toISOString(),
    };

    dispatch(addSpendingAsync(newSpending));

    setDescription("");
    setAmount("");
    setCurrency(CurrencyEnum.HUF);
  };
  return (
    <div className="spending-form full-width">
      <Input
        type={InputEnum.TEXT}
        placeholder={"Description"}
        value={description}
        onChangeHandler={(e) => setDescription(e.target.value)}
        className="spending-form-description full-width default-field-padding"
      />
      <Input
        type={InputEnum.NUMBER}
        placeholder={"Amount"}
        value={amount}
        onChangeHandler={(e) => setAmount(e.target.value)}
        className="spending-form-amount full-width default-field-padding"
      />
      <Select
        options={[
          { value: CurrencyEnum.HUF, title: CurrencyEnum.HUF },
          { value: CurrencyEnum.USD, title: CurrencyEnum.USD },
        ]}
        onChangeHandler={(e) => setCurrency(e.target.value)}
        defaultValue={currency}
        className="spending-form-currency full-width default-field-padding"
      />
      <Button
        title={"Save"}
        onClickHandler={handleSubmit}
        disabled={isSaveButtonDisabled}
      />
    </div>
  );
}
