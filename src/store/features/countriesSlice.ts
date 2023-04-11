import { createSlice } from "@reduxjs/toolkit";
import {IInitialState} from "interfaces/stateInterface";

const initialState: IInitialState = {
    status: 'loading',
    error: null,
    countries: []
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {

    }
});

export const {} = countriesSlice.actions;
export default countriesSlice.reducer;