import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const storeSlice = createSlice({
	name: "store",
	initialState,
	extraReducers: () => {
		// add cases here if needed
	},
	reducers: {},
});

export default storeSlice.reducer;
