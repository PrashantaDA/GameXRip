import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../constants";

/**
 * Custom hook for handling window resize events
 * @param {number} breakpoint - The breakpoint width in pixels (defaults to lg breakpoint)
 * @returns {boolean} - Whether the window width is below the breakpoint
 */
const useWindowResize = (breakpoint = BREAKPOINTS.lg) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= breakpoint);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isMobile;
};

export default useWindowResize;
