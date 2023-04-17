import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ICountries, IInitialState} from "interfaces/stateInterface";
import { fetchCountry } from 'utils/fetchCountry';
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (URL: string, {rejectWithValue}) => {
        try {
            const response = await fetchCountry(URL);

            if(!response.ok) {
                throw new Error('Not found');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            if(error instanceof Error) {
                return rejectWithValue(error.message)
            }

            throw error;
        }
    }
)

const initialState: IInitialState = {
    status: 'loading',
    error: null,
    countries: []
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<ICountries[]>) => {
            state.status = 'fulfilled';
            state.countries = action.payload;
        });
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload as string;
        })
    }
});

export const {} = countriesSlice.actions;
export default countriesSlice.reducer;