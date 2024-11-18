import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

interface loggedInState {
  isLoggedIn: {
    ids: number[];
    entities: {};
    isLoggedIn: boolean;
  };
}

const isLoggedInAdapter = createEntityAdapter();
const initialState = isLoggedInAdapter.getInitialState({
  isLoggedIn: !!localStorage.getItem("userId"),
});

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLogIn } = loggedInSlice.actions;
export const isLoggedInSelector = (state: loggedInState) =>
  state.isLoggedIn.isLoggedIn;
export default loggedInSlice.reducer;
