import { useEffect, useCallback, useRef } from "react";

const useKeyboardShortcut = (keys, callback, options = {}) => {
	const { ctrlKey = false, altKey = false, shiftKey = false, metaKey = false, preventDefault = true, stopPropagation = true, enabled = true } = options;

	const keysRef = useRef(Array.isArray(keys) ? keys : [keys]);
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleKeyDown = useCallback(
		(event) => {
			if (!enabled) return;

			const pressedKeys = keysRef.current;
			const isKeyPressed = pressedKeys.includes(event.key.toLowerCase());

			if (isKeyPressed && event.ctrlKey === ctrlKey && event.altKey === altKey && event.shiftKey === shiftKey && event.metaKey === metaKey) {
				if (preventDefault) {
					event.preventDefault();
				}
				if (stopPropagation) {
					event.stopPropagation();
				}
				callbackRef.current(event);
			}
		},
		[ctrlKey, altKey, shiftKey, metaKey, preventDefault, stopPropagation, enabled]
	);

	useEffect(() => {
		if (enabled) {
			window.addEventListener("keydown", handleKeyDown);
			return () => {
				window.removeEventListener("keydown", handleKeyDown);
			};
		}
	}, [handleKeyDown, enabled]);

	// Update keys when they change
	useEffect(() => {
		keysRef.current = Array.isArray(keys) ? keys : [keys];
	}, [keys]);
};

export default useKeyboardShortcut;
