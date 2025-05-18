import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Component imports
import { Banner, ImageSlider, Preloader, Tabs, Title } from "../../components/common/index";
import { GameList } from "../../components/game/index";

// Utility imports
import { STATUS } from "../../utils/status";
import { join_image, store_image, PA_bg, MK_bg } from "../../utils/images";

// Redux imports
import { selectAllGames, selectAllGamesStatus } from "../../redux/store/gameSlice";
import { selectAllGenres, selectAllGenresStatus } from "../../redux/store/genreSlice";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import { selectAllStores, selectAllStoresStatus } from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";

// Icon imports
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";

/**
 * HomePage component - Main landing page of the application
 * Displays featured games, genres, and community sections
 */
const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Redux state selectors
	const games = useSelector(selectAllGames);
	const gamesStatus = useSelector(selectAllGamesStatus);
	const genres = useSelector(selectAllGenres);
	const genresStatus = useSelector(selectAllGenresStatus);
	const stores = useSelector(selectAllStores);
	const storesStatus = useSelector(selectAllStoresStatus);

	// Fetch data on component mount
	useEffect(() => {
		dispatch(fetchAsyncGames());
		dispatch(fetchAsyncGenres());
		dispatch(fetchAsyncStores());
	}, [dispatch]);

	/**
	 * Handles navigation to all games page
	 */
	const handleViewAllGames = () => {
		navigate("/games", { replace: true });
	};

	// Renders popular games section with view all button
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
			{/* Hero Image Slider */}
			<ImageSlider />

			{/* Popular Games Section */}
			<section
				className="section sc-popular"
				style={{
					background: `linear-gradient(180deg, rgba(12, 10, 36, 0.79) 0%, rgba(0, 0, 0, 0.90) 72.92%), url(${MK_bg}) center/cover no-repeat fixed`,
				}}
			>
				<div className="container">
					<Title titleName={{ firstText: "🔥Top", secondText: "Games" }} />
					{gamesStatus === STATUS.LOADING ? <Preloader /> : games?.length > 0 ? renderedPopularGames : "No Games Found"}
				</div>
			</section>

			{/* Banner Section */}
			<Banner />

			{/* Community Join Section */}
			<section
				className="section sc-join d-flex align-items-center"
				style={{
					background: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${join_image}) center/cover no-repeat`,
				}}
			>
				<div className="container w-100">
					<div className="join-content text-white mx-auto text-center">
						<h2 className="join-title mb-3">
							Join The <span>Community</span>
						</h2>
						<p className="lead-text">Join our Discord. Built by Gamers for the Gamers. No matter the game you play, No matter your skill level. You are Welcome :).</p>

						<div className="join-badge text-uppercase">
							<div className="badge-content">
								<span>Join Our Discord</span>
								<FaDiscord
									className="discord-icon"
									size={32}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Genres Section */}
			<section
				className="section sc-genres"
				style={{
					background: `linear-gradient(180deg, rgba(12, 10, 36, 0.79) 0%, rgba(0, 0, 0, 0.90) 72.92%), url(${PA_bg}) center/cover no-repeat fixed`,
				}}
			>
				<div className="container">
					<Title
						titleName={{
							firstText: <MdOutlineCategory />,
							secondText: "Genres",
						}}
					/>
					{genresStatus === STATUS.LOADING ? (
						<Preloader />
					) : genres?.length > 0 ? (
						<Tabs
							sliceValue={9}
							data={genres}
						/>
					) : (
						"No available genres!!"
					)}
				</div>
			</section>

			{/* Stores Section */}
			<section
				className="section sc-stores"
				style={{
					background: `linear-gradient(180deg,rgba(12,10,36,0.79)0%,rgba(0,0,0,0.90) 72.92%),url(${store_image}) center/cover no-repeat`,
				}}
			>
				<div className="container">
					<Title
						titleName={{
							firstText: "Game",
							secondText: "Stores💸",
						}}
					/>
					{storesStatus === STATUS.LOADING ? <Preloader /> : stores?.length > 0 ? <StoreList stores={stores} /> : "No stores found"}
				</div>
			</section>
		</HomeWrapper>
	);
};

export default HomePage;

/**
 * Styled components for HomePage
 */
const HomeWrapper = styled.div`
	/* Popular Games Section Styles */
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

	/* Community Join Section Styles */
	.sc-join {
		min-height: 470px;

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

		.join-badge {
			background: rgba(88, 101, 242, 0.1);
			padding: 1rem 2.5rem;
			font-weight: 600;
			font-size: 1.4rem;
			display: inline-block;
			margin: 27px 0;
			border-radius: 14px;
			box-shadow: 0 4px 15px rgba(88, 101, 242, 0.2);
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			position: relative;
			overflow: hidden;
			cursor: pointer;
			border: 1px solid rgba(88, 101, 242, 0.3);
			backdrop-filter: blur(8px);

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(88, 101, 242, 0.2), transparent);
				transition: 0.6s;
			}

			&:hover {
				transform: translateY(-3px);
				background: rgba(88, 101, 242, 0.15);
				border-color: rgba(88, 101, 242, 0.5);
				box-shadow: 0 8px 25px rgba(88, 101, 242, 0.3);

				&::before {
					left: 100%;
				}

				.discord-icon {
					transform: scale(1.1) rotate(5deg);
				}
			}

			.badge-content {
				display: flex;
				align-items: center;
				gap: 1.2rem;
				color: #fff;
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

				.discord-icon {
					color: #5865f2;
					transition: all 0.4s ease;
					filter: drop-shadow(0 2px 4px rgba(88, 101, 242, 0.3));
				}
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
