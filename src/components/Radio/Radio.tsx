import React from "react";

type RadioType = {
  value: string;
  title: string;
};

export default function Radio({radios, selectedRadio, onChangeHandler}: {radios: RadioType[], selectedRadio: RadioType, onChangeHandler: () => void}) {
  return radios.map(radio => (
    <div className="radio">
      <label>
        <input type="radio" value={radio.value} checked={radio.value === selectedRadio.value} onChange={onChangeHandler} />
        {radio.title}
      </label>
    </div>
  ));
}
