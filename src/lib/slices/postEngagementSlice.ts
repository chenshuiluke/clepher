import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import sampleData from "../sample_data";
import Record from "../types/record";
import EditEngagementState from "../types/settings";
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
    savePost: (
      state,
      action: PayloadAction<{ settings: EditEngagementState; id: number }>,
    ) => {
      const { settings, id } = action.payload;
      const index = state.data.findIndex((record) => record.id == id);
      if (index > -1) {
        state.data[index].settings = settings;
      }
      return state;
    },
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
    deleteAllSelected: (state) => {
      state.data = state.data.filter((record) => !record.selected);
      state.currentPage = 1;
      state.lastPage = Math.ceil(state.data.length / 10);
      if (state.lastPage == 0) {
        state.lastPage = 1;
      }
      state.numSelected = 0;
      return state;
    },
    gotoPreviousPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
      return state;
    },
    gotoNextPage: (state) => {
      if (state.currentPage < state.lastPage) {
        state.currentPage++;
      }
      return state;
    },
    gotoFirstPage: (state) => {
      state.currentPage = 1;
      return state;
    },
    gotoLastPage: (state) => {
      state.currentPage = state.lastPage;
      return state;
    },
    gotoPage: (state, action: PayloadAction<number>) => {
      const destinationPage = action.payload;
      if (destinationPage <= state.lastPage && destinationPage > 0) {
        state.currentPage = destinationPage;
      }
    },
  },
});

export const {
  toggleSelected,
  selectAll,
  deselectAll,
  gotoNextPage,
  gotoPreviousPage,
  gotoFirstPage,
  gotoLastPage,
  gotoPage,
  savePost,
  deleteAllSelected,
} = postEngagementSlice.actions;
export default postEngagementSlice.reducer;
