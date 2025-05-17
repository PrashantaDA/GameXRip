import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebarStatus: false,
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	extraReducers: () => {
		// add cases here if needed
	},
	reducers: {
		setSidebarOn: (state) => {
			state.sidebarStatus = true;
		},
		setSidebarOff: (state) => {
			state.sidebarStatus = false;
		},
	},
});

export const { setSidebarOff, setSidebarOn } = sidebarSlice.actions;
export const selectSidebarStatus = (state) => state.sidebar.sidebarStatus;

export default sidebarSlice.reducer;
