import { useEffect } from "react";
import styled from "styled-components";
import { Banner, ImageSlider, Preloader, Title } from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import { selectAllGames, selectAllGamesStatus } from "../../redux/store/gameSlice";
import { GameList } from "../../components/game/index";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const games = useSelector(selectAllGames);
	const gamesStatus = useSelector(selectAllGamesStatus);

	useEffect(() => {
		dispatch(fetchAsyncGames());
	}, [dispatch]);

	const handleViewAllGames = () => {
		navigate("/games", { replace: true });
	};

	const renderedPopularGames = (
		<>
			<GameList
				sliceValue={9}
				games={games}
			/>
			<div className="d-flex justify-content-center">
				<button
					onClick={handleViewAllGames}
					className="section-btn"
				>
					View all games
				</button>
			</div>
		</>
	);

	return (
		<HomeWrapper>
			<ImageSlider />

			<section className="section sc-popular">
				<div className="container">
					<Title titleName={{ firstText: "🔥Top", secondText: "Games" }} />
					{gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? renderedPopularGames : "No Games Found"}
				</div>
			</section>
			<Banner />
		</HomeWrapper>
	);
};

export default HomePage;

const HomeWrapper = styled.div`
	.sc-popular {
		background-color: var(--clr-violet-darker);
		.section-btn {
			margin-top: 60px;
			background: var(--clr-purple-normal);
			border: 2px solid var(--clr-purple-normal);
			color: var(--clr-white);
			cursor: pointer;
			font-size: 1.8rem;
			font-weight: 600;
			text-transform: uppercase;
			transition: all 0.3s ease;
			padding: 1rem 3rem;
			border-radius: 8px;
			position: relative;
			overflow: hidden;
			box-shadow: 0 4px 15px rgba(157, 78, 221, 0.2);

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
				transition: 0.5s;
			}

			&:hover {
				transform: translateY(-3px);
				box-shadow: 0 6px 20px rgba(157, 78, 221, 0.3);
				background: var(--clr-purple-normal);
				border-color: var(--clr-purple-normal);

				&::before {
					left: 100%;
				}
			}

			&:active {
				transform: translateY(-1px);
				box-shadow: 0 4px 15px rgba(157, 78, 221, 0.2);
			}
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
