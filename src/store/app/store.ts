import { configureStore } from "@reduxjs/toolkit";
import countriesSliceReducer from "../features/countriesSlice";

export const store = configureStore({
    reducer: {
        countriesSlice: countriesSliceReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>