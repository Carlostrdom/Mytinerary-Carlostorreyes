import { createReducer } from "@reduxjs/toolkit";
import { fetchCities, selectCities, setSearch } from "../actionCities/actionCities.js";

const initialState = {
    cities: [],
    search: "",
    selectedCity: {},
    loading: true,
    error: false,
};

const reduxCities = createReducer(initialState, (builder) => {
    builder.addCase(setSearch, (state, action) => {
        state.search = action.payload;
    }).addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
        
    }).addCase(fetchCities.pending, (state) => {
        state.loading = true;
    }).addCase(fetchCities.rejected, (state) => {
        state.loading = false;
        state.error = true;
    }).addCase(selectCities, (state, action) => {
        state.selectedCity = action.payload;
    })
});

export default reduxCities;
