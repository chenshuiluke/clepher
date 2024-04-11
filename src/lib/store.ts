import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import postEngagementSlice from "./slices/postEngagementSlice";
import editEngagementSlice from "./slices/editEngagementSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      themeSlice,
      postEngagementSlice,
      editEngagementSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
