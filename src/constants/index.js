export * as apiURL from "./apiURL";

export const API_CONFIG = {
	BASE_URL: import.meta.env.VITE_API_URL,
	KEY: import.meta.env.VITE_API_KEY,
	TIMEOUT: 10000,
};

export const ROUTES = {
	HOME: "/",
	GAMES: "/games",
	GAME_DETAILS: "/games/:gameId",
	STORES: "/stores",
	STORE_DETAILS: "/stores/:storeId",
	CREATORS: "/creators",
	ABOUT: "/about",
};

export const BREAKPOINTS = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

export const SOCIAL_LINKS = {
	STEAM: {
		url: "https://store.steampowered.com",
		icon: "steam",
	},
	TWITCH: {
		url: "https://www.twitch.tv",
		icon: "twitch",
	},
	KICK: {
		url: "https://kick.com",
		icon: "kick",
	},
	YOUTUBE: {
		url: "https://www.youtube.com",
		icon: "youtube",
	},
};

export const ANIMATION_DURATIONS = {
	FAST: 200,
	NORMAL: 300,
	SLOW: 500,
};

export const ERROR_MESSAGES = {
	DEFAULT: "Something went wrong. Please try again.",
	NOT_FOUND: "The requested resource was not found.",
	NETWORK_ERROR: "Network error. Please check your connection.",
	UNAUTHORIZED: "You are not authorized to perform this action.",
};
