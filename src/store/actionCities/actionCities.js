import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setSearch = createAction("SET_SEARCH");
const selectCities = createAction("SELECT_CITIES");

const fetchCities = createAsyncThunk("cities/fetchCities", async (search) => {
    try {

        const url = search
            ? `http://localhost:8080/api/cities/all?name=${search}`
            : "http://localhost:8080/api/cities/all";

        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
});

export { setSearch, fetchCities, selectCities };