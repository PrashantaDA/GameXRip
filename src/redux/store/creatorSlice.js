import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const creatorSlice = createSlice({
	name: "creator",
	initialState,
	extraReducers: () => {
		// add cases here if needed
	},
	reducers: {},
});

export default creatorSlice.reducer;
