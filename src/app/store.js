import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddiware) => getDefaultMiddiware().concat(),
});

setupListeners(store.dispatch);
