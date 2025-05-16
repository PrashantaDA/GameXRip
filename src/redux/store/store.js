import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import creatorReducer from "./creatorSlice";

const store = configureStore({
	reducer: {
		genre: genreReducer,
		game: gameReducer,
		sidebar: sidebarReducer,
		creator: creatorReducer,
		store: storeReducer,
	},
});

export default store;
