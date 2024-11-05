import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchItineraries = createAsyncThunk(
    "ITINERARIES/FETCH_ITINERARIES",
    async (selectedCityId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/itineraries/cities/${selectedCityId}`
            );
            return response.data.response;
        } catch (error) {
            console.error("Error fetching itineraries:", error);
            return rejectWithValue(error.response?.data || 'Error fetching itineraries');
        }
    }
);

export { fetchItineraries };
