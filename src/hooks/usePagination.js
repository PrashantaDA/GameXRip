import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { scrollToTop } from "../utils/scrollUtils";

const usePagination = (initialPage = 1) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState(initialPage);

	useEffect(() => {
		// Initialize page from URL or default to initialPage
		const pageParam = searchParams.get("page");
		if (pageParam) {
			setPage(parseInt(pageParam));
		} else if (!pageParam && initialPage !== 1) {
			setSearchParams({ page: initialPage.toString() }, { replace: true });
		}
	}, []);

	const handlePageChange = (newPage) => {
		setPage(newPage);
		setSearchParams({ page: newPage.toString() }, { replace: true });
		scrollToTop();
	};

	return {
		page,
		handlePageChange,
	};
};

export default usePagination;
