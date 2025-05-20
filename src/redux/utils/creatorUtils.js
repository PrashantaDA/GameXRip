import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchAsyncCreators = createAsyncThunk("developers/fetch", async (page = 1) => {
	const { data } = await axios.get(`${apiURL.creatorsURL}?${API_KEY}&page=${page}`);
	return data;
});
