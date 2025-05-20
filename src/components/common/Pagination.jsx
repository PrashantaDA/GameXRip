import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollUtils";

const Pagination = ({ pageHandler, prevPage, currentPage, nextPage }) => {
	const [searchParams, setSearchParams] = useSearchParams();

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
			const newPage = currentPage - 1;
			pageHandler(newPage);
			updatePageInURL(newPage);
			scrollToTop();
		}
	};

	const pageNextHandler = () => {
		if (nextPage !== null) {
			const newPage = currentPage + 1;
			pageHandler(newPage);
			updatePageInURL(newPage);
			scrollToTop();
		}
	};

	return (
		<PaginationWrapper>
			<button
				className="pagination-button"
				onClick={pagePrevHandler}
				disabled={prevPage === null}
			>
				<AiOutlineArrowLeft />
			</button>
			<span className="pagination-info">Page {currentPage}</span>
			<button
				className="pagination-button"
				onClick={pageNextHandler}
				disabled={nextPage === null}
			>
				<AiOutlineArrowRight />
			</button>
		</PaginationWrapper>
	);
};

Pagination.propTypes = {
	pageHandler: PropTypes.func.isRequired,
	prevPage: PropTypes.string,
	currentPage: PropTypes.number.isRequired,
	nextPage: PropTypes.string,
};

export default Pagination;

const PaginationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-top: 32px;

	.pagination-button {
		background: rgba(255, 255, 255, 0.1);
		border: none;
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover:not(:disabled) {
			background: var(--clr-purple-normal);
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	.pagination-info {
		color: white;
		font-size: 14px;
	}
`;
