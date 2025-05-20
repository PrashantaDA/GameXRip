import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollUtils";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled up to given distance
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<BackToTopWrapper
					as={motion.div}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
					onClick={scrollToTop}
				>
					<FaArrowUp className="arrow-icon" />
				</BackToTopWrapper>
			)}
		</AnimatePresence>
	);
};

export default BackToTop;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const BackToTopWrapper = styled.div`
	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: var(--clr-purple-normal);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
	animation: ${floatAnimation} 2s ease-in-out infinite;

	.arrow-icon {
		font-size: 20px;
	}

	&:hover {
		background: var(--clr-purple-dark);
		transform: translateY(-2px);
	}
`;
