import { useEffect } from "react";
import styled from "styled-components";
import { Banner, Preloader, Title } from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGames, selectAllGamesStatus } from "../../redux/store/gameSlice";
import { GameList } from "../../components/game/index";

import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { Link } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();
	const games = useSelector(selectAllGames);
	const gamesStatus = useSelector(selectAllGamesStatus);

	useEffect(() => {
		dispatch(fetchAsyncGames());
	}, [dispatch]);

	const renderedPopularGames = (
		<>
			<GameList
				sliceValue={9}
				games={games}
			/>
			<div className="d-flex justify-content-center">
				<Link
					to={"/games"}
					className="section-btn"
				>
					View all games
				</Link>
			</div>
		</>
	);

	return (
		<HomeWrapper>
			<Banner />

			<section className="section sc-popular">
				<div className="container">
					<Title titleName={{ firstText: "🔥Top", secondText: "Games" }} />
					{gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? renderedPopularGames : "No Games Found"}
				</div>
			</section>
		</HomeWrapper>
	);
};

export default HomePage;

const HomeWrapper = styled.div`
	.sc-popular {
		background-color: var(--clr-violet-dark-active);
		.section-btn {
			margin-top: 60px;
		}
	}

	.sc-join {
		min-height: 640px;

		.join-content {
			max-width: 600px;
		}

		.join-title {
			text-shadow: 0px 4px 4px 0px #00000040;
			font-size: 44px;
			letter-spacing: 0.09em;

			span {
				color: var(--clr-purple-normal);
				font-family: var(--font-family-right);
			}
		}
	}

	.sc-genres {
		background-color: var(--clr-violet-dark-active);
	}

	.sc-stores {
		min-height: 841px;
	}
`;
