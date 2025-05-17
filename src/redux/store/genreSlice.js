import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const genreSlice = createSlice({
	name: "genre",
	initialState,
	extraReducers: () => {
		// add cases here if needed
	},
	reducers: {},
});

export default genreSlice.reducer;
