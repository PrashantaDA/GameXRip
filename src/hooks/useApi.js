import { useState, useCallback, useRef } from "react";
import { ERROR_MESSAGES } from "../constants";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const useApi = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const cache = useRef(new Map());
	const abortController = useRef(null);

	const fetchWithRetry = useCallback(async (url, options, retryCount = 0) => {
		try {
			// Cancel previous request if it exists
			if (abortController.current) {
				abortController.current.abort();
			}
			abortController.current = new AbortController();

			const response = await fetch(url, {
				...options,
				signal: abortController.current.signal,
			});

			if (!response.ok) {
				throw new Error(response.status === 404 ? ERROR_MESSAGES.NOT_FOUND : response.status === 401 ? ERROR_MESSAGES.UNAUTHORIZED : ERROR_MESSAGES.DEFAULT);
			}

			return await response.json();
		} catch (err) {
			if (err.name === "AbortError") {
				throw err;
			}

			if (retryCount < MAX_RETRIES) {
				await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
				return fetchWithRetry(url, options, retryCount + 1);
			}
			throw err;
		}
	}, []);

	const fetchData = useCallback(
		async (url, options = {}) => {
			const cacheKey = `${url}-${JSON.stringify(options)}`;
			const cachedData = cache.current.get(cacheKey);

			if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
				setData(cachedData.data);
				return cachedData.data;
			}

			setIsLoading(true);
			setError(null);

			try {
				const result = await fetchWithRetry(url, {
					...options,
					headers: {
						"Content-Type": "application/json",
						...options.headers,
					},
				});

				setData(result);

				// Cache the result
				cache.current.set(cacheKey, {
					data: result,
					timestamp: Date.now(),
				});

				return result;
			} catch (err) {
				const errorMessage = err.message || ERROR_MESSAGES.DEFAULT;
				setError(errorMessage);
				throw new Error(errorMessage);
			} finally {
				setIsLoading(false);
			}
		},
		[fetchWithRetry]
	);

	const clearCache = useCallback(() => {
		cache.current.clear();
	}, []);

	const clearCacheForUrl = useCallback((url) => {
		for (const key of cache.current.keys()) {
			if (key.startsWith(url)) {
				cache.current.delete(key);
			}
		}
	}, []);

	// Cleanup on unmount
	const cleanup = useCallback(() => {
		if (abortController.current) {
			abortController.current.abort();
		}
	}, []);

	return {
		data,
		error,
		isLoading,
		fetchData,
		clearCache,
		clearCacheForUrl,
		cleanup,
	};
};

export default useApi;
