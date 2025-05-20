import { useEffect, useCallback, useRef, useState } from "react";

const useInfiniteScroll = (callback, options = {}) => {
	const { root = null, rootMargin = "0px", threshold = 0, enabled = true, initialLoad = false, loadingDelay = 0 } = options;

	const [isLoading, setIsLoading] = useState(false);
	const observer = useRef(null);
	const loadingTimeout = useRef(null);

	const handleIntersection = useCallback(
		async (entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && !isLoading) {
				setIsLoading(true);

				if (loadingDelay > 0) {
					loadingTimeout.current = setTimeout(async () => {
						try {
							await callback();
						} finally {
							setIsLoading(false);
						}
					}, loadingDelay);
				} else {
					try {
						await callback();
					} finally {
						setIsLoading(false);
					}
				}
			}
		},
		[callback, isLoading, loadingDelay]
	);

	const lastElementRef = useCallback(
		(node) => {
			if (observer.current) {
				observer.current.disconnect();
			}

			if (!enabled) return;

			observer.current = new IntersectionObserver(handleIntersection, {
				root,
				rootMargin,
				threshold,
			});

			if (node) {
				observer.current.observe(node);
			}
		},
		[enabled, root, rootMargin, threshold, handleIntersection]
	);

	// Initial load if enabled
	useEffect(() => {
		if (initialLoad && enabled) {
			callback();
		}
	}, [initialLoad, enabled, callback]);

	// Cleanup
	useEffect(() => {
		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
			if (loadingTimeout.current) {
				clearTimeout(loadingTimeout.current);
			}
		};
	}, []);

	return {
		lastElementRef,
		isLoading,
	};
};

export default useInfiniteScroll;
