import { createReducer } from "@reduxjs/toolkit";
import { fetchItineraries } from "../actionCities/actionitineraries";

const initialItineraryState = {
    itineraries: [],
    loading: false,
    error: null,
};

const reduxItineraries = createReducer(initialItineraryState, (builder) => {
    builder.addCase(fetchItineraries.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchItineraries.fulfilled, (state, action) => {
            state.loading = false;
            state.itineraries = action.payload;
        })
        .addCase(fetchItineraries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default reduxItineraries;
