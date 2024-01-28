import React, { useCallback, useEffect, useState } from "react";
import { fetchSpendingsAsync } from "../../slices/spendingSlice";
import { CurrencyEnum, RootState, Spending } from "../../types/types";
import { Radio, Select, SpendingElement } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";

import "./SpendingList.css";

export default function SpendingList() {
  const [sortOption, setSortOption] = useState<string>("dateDesc");
  const [filterOption, setFilterOption] = useState<string>(CurrencyEnum.ALL);
  const [sortedSpendings, setSortedSpendings] = useState<Spending[]>([]);
  const spendings = useAppSelector(
    (state: RootState) => state.spending.spendings
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSpendingsAsync());
  }, [dispatch]);

  useEffect(() => {
    let sortedList = [...spendings];

    if (sortOption === "dateAsc") {
      sortedList = sortedList.sort(
        (a, b) =>
          new Date(a.spent_at).getTime() - new Date(b.spent_at).getTime()
      );
    } else if (sortOption === "dateDesc") {
      sortedList = sortedList.sort(
        (a, b) =>
          new Date(b.spent_at).getTime() - new Date(a.spent_at).getTime()
      );
    } else if (sortOption === "amountAsc") {
      sortedList = sortedList.sort((a, b) => a.amount - b.amount);
    } else if (sortOption === "amountDesc") {
      sortedList = sortedList.sort((a, b) => b.amount - a.amount);
    }

    if (filterOption !== CurrencyEnum.ALL) {
      sortedList = sortedList.filter(
        (spending) => spending.currency === filterOption
      );
    }

    setSortedSpendings(sortedList);
  }, [spendings, sortOption, filterOption]);

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event.target.value);
    },
    []
  );

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterOption(event.target.value);
    },
    []
  );
  return (
    <>
      <div className="full-width flex jc-sb spending-list-settings">
        <div>
          <Select
            defaultValue={sortOption}
            onChangeHandler={handleSortChange}
            options={[
              {
                value: "dateDesc",
                title: "Sorted by Date descending (default)",
              },
              { value: "dateAsc", title: "Sorted by Date ascending" },
              { value: "amountDesc", title: "Sorted by Amount descending" },
              { value: "amountAsc", title: "Sorted by Amount ascending" },
            ]}
            className="spending-list-sortBy full-width default-field-padding"
          />
        </div>

        <div className="flex jc-sb">
          <Radio
            onChangeHandler={handleFilterChange}
            filteredOption={filterOption}
            name="currencyFilter"
            radios={[
              { value: CurrencyEnum.ALL, title: CurrencyEnum.ALL },
              { value: CurrencyEnum.USD, title: CurrencyEnum.USD },
              { value: CurrencyEnum.HUF, title: CurrencyEnum.HUF },
            ]}
          />
        </div>
      </div>

      <ul className="full-width spending-list">
        {sortedSpendings.map((spending) => (
          <SpendingElement key={spending.id} spending={spending} />
        ))}
      </ul>
    </>
  );
}
