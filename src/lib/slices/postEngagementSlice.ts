import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import sampleData from "../sample_data";
import Record from "../types/Record";

interface PostEngagementState {
  data: Array<Record>;
  numSelected: number;
  currentPage: number;
  lastPage: number;
}

const initialState: PostEngagementState = {
  data: sampleData,
  numSelected: 0,
  currentPage: 1,
  lastPage: Math.ceil(sampleData.length / 10),
};

export const postEngagementSlice = createSlice({
  name: "postEngagementSlice",
  initialState,
  reducers: {
    toggleSelected: (state, action: PayloadAction<number>) => {
      const idToFind = action.payload;

      const index = state.data.findIndex((element) => element.id === idToFind);
      state.data[index].selected = !state.data[index].selected;

      const selectedElements = state.data.filter((element) => element.selected);
      state.numSelected = selectedElements.length;
      return state;
    },
    selectAll: (state) => {
      state.data = state.data.map((element) => {
        element.selected = true;
        return element;
      });
      state.numSelected = state.data.length;
      return state;
    },
    deselectAll: (state) => {
      state.data = state.data.map((element) => {
        element.selected = false;
        return element;
      });
      state.numSelected = 0;
      return state;
    },
  },
});

export const { toggleSelected, selectAll, deselectAll } =
  postEngagementSlice.actions;
export default postEngagementSlice.reducer;
