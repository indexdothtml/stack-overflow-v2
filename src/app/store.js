import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import notifyReducer from "../features/notification/notifySlice";

const rootReducer = combineReducers({
  authentication: authReducer,
  notification: notifyReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
