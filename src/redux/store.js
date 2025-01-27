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
});
export const persistor = persistStore(store);
