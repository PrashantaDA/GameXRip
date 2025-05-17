import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchAsyncGames = createAsyncThunk("games/fetch", async (page = 1) => {
	const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}&page_size=18`);
	return data;
});

export const fetchAsyncGameDetails = createAsyncThunk("game/details/fetch", async (id) => {
	const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
	return data;
});
