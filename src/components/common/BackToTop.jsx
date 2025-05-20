import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

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

	// Set the top coordinate to 0
	// Make scrolling smooth
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
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
	background: rgba(108, 92, 231, 0.1);
	border: 1px solid rgba(108, 92, 231, 0.3);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1000;
	backdrop-filter: blur(4px);
	transition: all 0.3s ease;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, rgba(108, 92, 231, 0.1), rgba(255, 255, 255, 0.1));
		border-radius: 50%;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:hover {
		transform: translateY(-5px);
		background: rgba(108, 92, 231, 0.2);
		box-shadow: 0 6px 16px rgba(108, 92, 231, 0.2);

		&::before {
			opacity: 1;
		}

		.arrow-icon {
			animation: ${floatAnimation} 1s ease-in-out infinite;
		}
	}

	.arrow-icon {
		color: #fff;
		font-size: 20px;
		transition: transform 0.3s ease;
	}
`;
