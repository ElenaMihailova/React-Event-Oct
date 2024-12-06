import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

interface RequestId {
  requestId: string | undefined;
}

const requestIdAdapter = createEntityAdapter();
const initialState = requestIdAdapter.getInitialState({
  requestId: undefined,
});

const requestIdSlice = createSlice({
  name: "requestId",
  initialState,
  reducers: {
    setRequestId: (state, action) => {
      state.requestId = action.payload;
    },
  },
});

export const { setRequestId } = requestIdSlice.actions;
export const requestIdSelector = (state: RequestId) => state.requestId;
export default requestIdSlice.reducer;
