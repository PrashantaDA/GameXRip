import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
	const { data } = await axios.get(`${apiURL.storesURL}?${API_KEY}`);
	return data;
});

export const fetchAsyncStoresDetails = createAsyncThunk("stores/details/fetch", async (id) => {
	const { data } = await axios.get(`${apiURL.storesURL}/${id}?${API_KEY}`);
	return data;
});
