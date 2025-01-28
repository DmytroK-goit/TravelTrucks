import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/slice";

const campersPersistConfig = {
  key: "campers",
  storage,
};

const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);
export const store = configureStore({
  reducer: { campers: persistedCampersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["REGISTER"],
      },
    }),
});
export const persistor = persistStore(store);
