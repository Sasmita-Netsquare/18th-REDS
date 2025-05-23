import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import counterReducer from "./counterReducer";
import eventAdminReducer from "./eventAdminSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  eventAdmin: eventAdminReducer,
});

export default rootReducer;
