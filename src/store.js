import { configureStore } from "@reduxjs/toolkit";
import locationInfoReducer from "./features/locationInfoSlice";

const store = configureStore({
    reducer: locationInfoReducer
});

export default store;