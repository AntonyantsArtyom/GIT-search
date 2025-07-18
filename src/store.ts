import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/api";
import { repositoriesReducer } from "@/entities/Repository/model/repositoriesSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    repositories: repositoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
