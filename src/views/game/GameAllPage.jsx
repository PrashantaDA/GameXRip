import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllGames, selectAllGamesStatus, selectGamesNextPage, selectGamesPreviousPage } from "../../redux/store/gameSlice";
import { useEffect, useState } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { Pagination, Preloader, Title } from "../../components/common";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game";
import { useSearchParams } from "react-router-dom";

const GameAllPage = () => {
	const dispatch = useDispatch();

	const games = useSelector(selectAllGames);
	const gamesStatus = useSelector(selectAllGamesStatus);
	const prevPage = useSelector(selectGamesPreviousPage);
	const nextPage = useSelector(selectGamesNextPage);
	const [searchParams, setSearchParams] = useSearchParams();

	// Initialize page from URL or default to 1
	const initialPage = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
	const [page, setPage] = useState(initialPage);

	// Set initial URL if no page parameter exists
	useEffect(() => {
		if (!searchParams.get("page")) {
			setSearchParams({ page: "1" }, { replace: true });
		}
		// Scroll to top when component mounts
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		dispatch(fetchAsyncGames(page));
	}, [dispatch, page]);

	const pageHandler = (pageValue) => {
		setPage(pageValue);
		setSearchParams({ page: pageValue.toString() }, { replace: true });
	};

	return (
		<GameAllPageWrapper>
			<div className="sc-games section">
				<div className="container">
					<Title
						titleName={{
							firstText: "All",
							secondText: "Games",
						}}
					/>
					{gamesStatus === STATUS.LOADING ? (
						<Preloader />
					) : games?.length > 0 ? (
						<>
							<GameList games={games} />
							<Pagination
								pageHandler={pageHandler}
								prevPage={prevPage}
								currentPage={page}
								nextPage={nextPage}
							/>
						</>
					) : (
						"Games Not Found!!"
					)}
				</div>
			</div>
		</GameAllPageWrapper>
	);
};

export default GameAllPage;

const GameAllPageWrapper = styled.div`
	background-color: var(--clr-violet-dark-active);

	.sc-games {
		min-height: 100vh;
		padding-top: 65px;
	}
`;
