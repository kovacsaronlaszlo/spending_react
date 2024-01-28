export interface RootState {
  spending: {
    spendings: Spending[];
  };
}

export interface Spending {
  id: number;
  description: string;
  amount: number;
  currency: string;
  spent_at: string;
}

export interface SpendingState {
  spendings: Spending[];
}

export enum InputEnum {
  TEXT = "text",
  NUMBER = "number",
}

export enum CurrencyEnum {
  HUF = "HUF",
  USD = "USD",
  ALL = "ALL",
}

export type OptionType = {
  value: string;
  title: string;
};

export type RadioType = {
  value: string;
  title: string;
};
