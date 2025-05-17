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
				<AiOutlineArrowLeft className="me-3" /> Prev
			</button>
			<button
				type="button"
				className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${nextPage === null ? "disabled" : ""}`}
				disabled={!nextPage}
				onClick={pageNextHandler}
			>
				Next <AiOutlineArrowRight className="me-3" />
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
		font-size: 18px;
		letter-spacing: 2px;
		cursor: pointer;

		&:disabled {
			cursor: default;
		}
	}

	.disabled {
		opacity: 0.6;
	}
`;
