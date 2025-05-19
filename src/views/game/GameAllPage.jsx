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
			<section className="section sc-games">
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
			</section>
		</GameAllPageWrapper>
	);
};

export default GameAllPage;

const GameAllPageWrapper = styled.div`
	.sc-games {
		min-height: 100vh;
		padding: 80px 0;
		position: relative;
		background-color: rgba(12, 10, 36, 0.95);
		background-image: url(${MK_bg});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.95) 100%);
			pointer-events: none;
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
			pointer-events: none;
			animation: pulse 8s ease-in-out infinite;
			z-index: 1;
		}

		.container {
			position: relative;
			z-index: 2;
		}

		.title {
			position: relative;
			margin-bottom: 60px;
			text-align: center;

			&::after {
				content: "";
				position: absolute;
				bottom: -20px;
				left: 50%;
				transform: translateX(-50%);
				width: 100px;
				height: 4px;
				background: linear-gradient(90deg, transparent, var(--clr-purple-normal), transparent);
				border-radius: 2px;
				animation: shimmer 2s infinite;
			}
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.5;
		}
	}

	@keyframes shimmer {
		0% {
			background-position: -100% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
`;
