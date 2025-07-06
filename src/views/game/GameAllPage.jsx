import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllGames, selectAllGamesStatus, selectGamesNextPage, selectGamesPreviousPage } from "../../redux/store/gameSlice";
import { useEffect, useState } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { Pagination, Preloader, Title } from "../../components/common";
import { STATUS } from "../../utils/status";
import { GameList } from "../../components/game";
import { useSearchParams } from "react-router-dom";
import { MK_bg } from "../../utils/images";
import { scrollToTop } from "../../utils/scrollUtils";
import "../../styles/shared.scss";

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
		scrollToTop();
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
			<section
				className="section sc-games gradient-overlay gradient-radial"
				style={{ backgroundImage: `url(${MK_bg})` }}
			>
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
							<GameList
								games={games}
								sliceValue={18}
							/>
							<Pagination
								pageHandler={pageHandler}
								prevPage={prevPage}
								currentPage={page}
								nextPage={nextPage}
							/>
						</>
					) : (
						<div className="not-found-wrapper">
							<div className="not-found-content">
								<h3 className="text-white mb-3">No Games Found</h3>
								<p className="text-white-50">We couldn't find any games matching your criteria.</p>
							</div>
						</div>
					)}
				</div>
			</section>
		</GameAllPageWrapper>
	);
};

export default GameAllPage;

const GameAllPageWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
`;
