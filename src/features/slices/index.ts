import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer, // ✅ Ensure this is here
});

export default rootReducer;
