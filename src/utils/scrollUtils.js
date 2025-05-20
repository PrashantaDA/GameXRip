/**
 * Scrolls the window to the top with smooth behavior
 */
export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

/**
 * Scrolls an element into view with smooth behavior
 * @param {string} selector - CSS selector for the element to scroll to
 * @param {Object} options - ScrollIntoView options
 */
export const scrollToElement = (selector, options = { block: "start", behavior: "smooth" }) => {
	const element = document.querySelector(selector);
	if (element) {
		element.scrollIntoView(options);
	}
};
