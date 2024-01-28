import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Spending, SpendingState } from "../types/types";

const initialState: SpendingState = {
  spendings: [],
};

const spendingSlice = createSlice({
  name: "spending",
  initialState,
  reducers: {
    addSpending: (state, action: PayloadAction<Spending>) => {
      state.spendings.push(action.payload);
    },
    setSpendings: (state, action: PayloadAction<Spending[]>) => {
      state.spendings = action.payload;
    },
    deleteSpending: (state, action: PayloadAction<number>) => {
      state.spendings = state.spendings.filter(
        (spending) => spending.id !== action.payload
      );
    },
    updateSpending: (state, action: PayloadAction<Spending>) => {
      const index = state.spendings.findIndex(
        (spending) => spending.id === action.payload.id
      );
      if (index !== -1) {
        state.spendings[index] = action.payload;
      }
    },
  },
});

export const { addSpending, setSpendings, deleteSpending, updateSpending } =
  spendingSlice.actions;
export default spendingSlice.reducer;

export const fetchSpendingsAsync = () => async (dispatch: Function) => {
  try {
    const response = await axios.get<Spending[]>(
      "https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/"
    );
    dispatch(setSpendings(response.data));
  } catch (error) {
    console.error("Error fetching spendings:", error);
  }
};

export const addSpendingAsync =
  (newSpending: Spending) => async (dispatch: Function) => {
    try {
      const response = await axios.post<Spending>(
        "https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/",
        newSpending
      );
      dispatch(addSpending(response.data));
    } catch (error) {
      console.error("Error adding spending:", error);
    }
  };

export const deleteSpendingAsync =
  (id: number) => async (dispatch: Function) => {
    try {
      await axios.delete(
        `https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/${id}/`
      );
      dispatch(deleteSpending(id));
    } catch (error) {
      console.error("Error deleting spending:", error);
    }
  };

export const updateSpendingAsync =
  (updatedSpending: Spending) => async (dispatch: Function) => {
    try {
      const response = await axios.patch<Spending>(
        `https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/${updatedSpending.id}/`,
        updatedSpending
      );
      dispatch(updateSpending(response.data));
    } catch (error) {
      console.error("Error updating spending:", error);
    }
  };
