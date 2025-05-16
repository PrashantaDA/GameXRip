import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gameSlice = createSlice({
	name: "game",
	initialState,
	extraReducers: () => {
		// add cases here if needed
	},
	reducers: {},
});

export default gameSlice.reducer;
