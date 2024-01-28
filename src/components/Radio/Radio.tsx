type RadioType = {
  value: string;
  title: string;
};

export default function Radio({
  radios,
  filteredOption,
  onChangeHandler,
  name,
}: {
  radios: RadioType[];
  filteredOption: string;
  name: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return radios.map((radio) => (
    <div className="radio">
      <input
        type="radio"
        name={name}
        id={radio.value}
        value={radio.value}
        checked={radio.value === filteredOption}
        onChange={onChangeHandler}
      />
      <label htmlFor={radio.value}>{radio.title}</label>
    </div>
  ));
}
