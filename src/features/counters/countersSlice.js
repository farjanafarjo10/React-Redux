import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,

  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value++;
    },

    decrement: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value--;
    },

    reset: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value = 0;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement, reset } = countersSlice.actions;
