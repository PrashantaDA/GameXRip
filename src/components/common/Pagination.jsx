import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Pagination = ({ pageHandler, prevPage, currentPage, nextPage }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const updatePageInURL = (page) => {
		setSearchParams({ page: page.toString() });
	};

	// Handle URL changes and initial page load
	useEffect(() => {
		const pageFromURL = searchParams.get("page");
		if (pageFromURL) {
			const pageNumber = parseInt(pageFromURL);
			if (pageNumber !== currentPage) {
				pageHandler(pageNumber);
			}
		} else if (currentPage !== 1) {
			// If no page in URL and not on first page, update URL
			updatePageInURL(currentPage);
		}
	}, []); // Only run on mount

	const pagePrevHandler = () => {
		if (prevPage !== null) {
			const newPage = --currentPage;
			pageHandler(newPage);
			updatePageInURL(newPage);
			scrollToTop();
		}
	};

	const pageNextHandler = () => {
		if (nextPage !== null) {
			const newPage = ++currentPage;
			pageHandler(newPage);
			updatePageInURL(newPage);
			scrollToTop();
		}
	};

	return (
		<PaginationWrapper className="d-flex align-items-center justify-content-center">
			<button
				type="button"
				className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${prevPage === null ? "disabled" : ""}`}
				disabled={!prevPage}
				onClick={pagePrevHandler}
			>
				<AiOutlineArrowLeft className="me-2" /> Prev
			</button>
			<button
				type="button"
				className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${nextPage === null ? "disabled" : ""}`}
				disabled={!nextPage}
				onClick={pageNextHandler}
			>
				Next <AiOutlineArrowRight className="ms-2" />
			</button>
		</PaginationWrapper>
	);
};

export default Pagination;

Pagination.propTypes = {
	pageHandler: PropTypes.func.isRequired,
	prevPage: PropTypes.number,
	currentPage: PropTypes.number.isRequired,
	nextPage: PropTypes.number,
};

const PaginationWrapper = styled.div`
	margin-top: 48px;
	.prev-btn,
	.next-btn {
		margin: 0 16px;
		font-size: 16px;
		letter-spacing: 1px;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.05);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 12px 24px;
		border-radius: 8px;
		transition: all 0.3s ease;
		backdrop-filter: blur(4px);
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(45deg, rgba(108, 92, 231, 0.1), rgba(255, 255, 255, 0.1));
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		&:hover:not(:disabled) {
			background: rgba(255, 255, 255, 0.1);
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

			&::before {
				opacity: 1;
			}
		}

		&:disabled {
			cursor: default;
			opacity: 0.5;
			background: rgba(255, 255, 255, 0.02);
		}

		svg {
			transition: transform 0.3s ease;
		}

		&:hover:not(:disabled) svg {
			transform: scale(1.1);
		}
	}

	.disabled {
		opacity: 0.5;
	}
`;
