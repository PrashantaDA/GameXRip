import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import GenreItem from "../genre/GenreItem";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

const Tabs = ({ data, sliceValue }) => {
	const [activeTab, setActiveTab] = useState(data[0]);
	const [tabButtonStatus, setTabButtonStatus] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
	const [currentPages, setCurrentPages] = useState({});
	const [genreGames, setGenreGames] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 992);
			if (window.innerWidth > 992) {
				setTabButtonStatus(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Initialize current page for each genre if not set
	useEffect(() => {
		const initialPages = {};
		data.forEach((genre) => {
			if (!currentPages[genre.id]) {
				initialPages[genre.id] = 1;
			}
		});
		setCurrentPages((prev) => ({ ...prev, ...initialPages }));
	}, [data]);

	// Fetch games for a genre
	const fetchGenreGames = async (genreId) => {
		if (genreGames[genreId]) return; // Don't fetch if we already have the games

		setLoading(true);
		try {
			const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&genres=${genreId}&page_size=60`);
			setGenreGames((prev) => ({
				...prev,
				[genreId]: data.results,
			}));
		} catch (error) {
			console.error("Error fetching genre games:", error);
		}
		setLoading(false);
	};

	// Fetch games when active tab changes
	useEffect(() => {
		if (activeTab?.id) {
			fetchGenreGames(activeTab.id);
		}
	}, [activeTab]);

	const tabClickHandler = (id) => {
		data.map((item) => {
			if (item.id === id) {
				setActiveTab(item);
				if (isMobile) {
					setTabButtonStatus(false);
				}
			}
		});
	};

	const tabButtonsHandler = () => setTabButtonStatus((prevStatus) => !prevStatus);

	const handlePageChange = (genreId, newPage) => {
		setCurrentPages((prev) => ({
			...prev,
			[genreId]: newPage,
		}));
	};

	const getCurrentPageGames = (games) => {
		if (!games) return [];
		const currentPage = currentPages[activeTab.id] || 1;
		const startIndex = (currentPage - 1) * sliceValue;
		const endIndex = startIndex + sliceValue;
		return games.slice(startIndex, endIndex);
	};

	const totalPages = Math.ceil((genreGames[activeTab?.id]?.length || 0) / sliceValue);
	const currentPage = currentPages[activeTab?.id] || 1;

	return (
		<TabsWrapper>
			<div className="container">
				<div className="tabs-content">
					<div className="tabs-header">
						<div className="genre-title">
							<h2>{activeTab.name}</h2>
							<button
								type="button"
								className="menu-toggle"
								onClick={tabButtonsHandler}
								aria-label="Toggle genre menu"
							>
								<AiOutlineMenu size={22} />
							</button>
						</div>
						<ul
							className={`tabs-buttons ${tabButtonStatus ? "show" : ""}`}
							role="tablist"
						>
							{data?.map((item) => (
								<li
									key={item?.id}
									className={`tabs-button ${item?.id === activeTab.id ? "tabs-active" : ""}`}
									role="presentation"
								>
									<button
										type="button"
										onClick={() => tabClickHandler(item?.id)}
										role="tab"
										aria-selected={item?.id === activeTab.id}
										aria-controls={`tabpanel-${item?.id}`}
									>
										<span className="button-content">
											<span className="button-text">{item?.name}</span>
											<span className="button-glow"></span>
										</span>
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="tabs-body">
						{loading ? (
							<div className="loading-state">Loading games...</div>
						) : (
							<>
								<div className="card-list">
									{getCurrentPageGames(genreGames[activeTab?.id])?.map((item) => (
										<GenreItem
											key={item?.id}
											gameItem={item}
										/>
									))}
								</div>
								{totalPages > 1 && (
									<div className="pagination-controls">
										<button
											className="pagination-btn"
											onClick={() => handlePageChange(activeTab.id, currentPage - 1)}
											disabled={currentPage === 1}
										>
											<AiOutlineArrowLeft />
										</button>
										<span className="page-info">
											{currentPage} / {totalPages}
										</span>
										<button
											className="pagination-btn"
											onClick={() => handlePageChange(activeTab.id, currentPage + 1)}
											disabled={currentPage === totalPages}
										>
											<AiOutlineArrowRight />
										</button>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</TabsWrapper>
	);
};

export default Tabs;

Tabs.propTypes = {
	data: PropTypes.array,
	sliceValue: PropTypes.number,
};

const TabsWrapper = styled.div`
	position: relative;
	min-height: 1000px;
	background-color: var(--clr-violet-dark-active);
	padding: 60px 0;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at top right, rgba(108, 92, 231, 0.1), transparent 70%);
		pointer-events: none;
	}

	.tabs-content {
		position: relative;
	}

	.tabs-header {
		position: relative;
		margin-bottom: 48px;

		@media screen and (min-width: 993px) {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
		}
	}

	.genre-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24px;
		padding: 0 16px;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;

		h2 {
			font-family: var(--font-family-poppins);
			font-size: 28px;
			font-weight: 600;
			color: var(--clr-white);
			margin: 0;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			position: relative;
			padding-left: 16px;

			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 4px;
				height: 24px;
				background: var(--clr-red-normal);
				border-radius: 2px;
			}
		}

		@media screen and (max-width: 992px) {
			margin-bottom: 16px;

			h2 {
				font-size: 24px;
			}
		}

		@media screen and (min-width: 993px) {
			order: 2;
			margin-bottom: 0;
		}
	}

	.menu-toggle {
		display: none;
		width: 44px;
		height: 44px;
		background: var(--clr-violet-dark);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 12px;
		color: var(--clr-white);
		z-index: 10;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(10px);

		&:hover {
			background: var(--clr-red-normal);
			transform: translateY(-2px);
			box-shadow: 0 6px 16px rgba(255, 0, 0, 0.3);
		}

		@media screen and (max-width: 992px) {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.tabs-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		padding: 0;
		margin: 0;
		list-style: none;
		background: linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, rgba(18, 18, 18, 0.95) 100%);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		padding: 16px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.08);
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(circle at top right, rgba(108, 92, 231, 0.1), transparent 70%);
			pointer-events: none;
		}

		@media screen and (min-width: 993px) {
			order: 1;
			justify-content: center;
			gap: 16px;
			padding: 20px;

			.tabs-button {
				flex: 0 0 auto;
				width: auto;
			}
		}

		@media screen and (max-width: 992px) {
			position: absolute;
			top: 100%;
			left: 16px;
			right: 16px;
			width: auto;
			height: auto;
			max-height: 80vh;
			flex-direction: row;
			flex-wrap: wrap;
			transform: translateY(-10px);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 1000;
			gap: 8px;
			padding: 16px;
			background: linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, rgba(18, 18, 18, 0.95) 100%);
			backdrop-filter: blur(20px);
			border-radius: 16px;
			overflow-y: auto;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: radial-gradient(circle at top right, rgba(108, 92, 231, 0.1), transparent 70%);
				pointer-events: none;
				border-radius: 16px;
			}

			&.show {
				transform: translateY(0);
				opacity: 1;
				visibility: visible;
			}

			.tabs-button {
				flex: 0 0 calc(50% - 4px);
				width: calc(50% - 4px);

				button {
					width: 100%;
					padding: 12px 16px;
					font-size: 14px;
					font-weight: 500;
					justify-content: center;
					border-radius: 12px;
					background: rgba(255, 255, 255, 0.05);
					display: flex;
					align-items: center;
					text-align: center;
					height: 100%;
					min-height: 44px;
					backdrop-filter: blur(5px);
					border: 1px solid rgba(255, 255, 255, 0.08);
					transition: all 0.2s ease;
					position: relative;
					overflow: hidden;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

					&::before {
						content: "";
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						width: 0;
						height: 2px;
						background: var(--clr-red-normal);
						transition: width 0.2s ease;
					}

					&:hover {
						background: rgba(255, 255, 255, 0.08);
						transform: translateY(-2px);
						box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

						&::before {
							width: 30px;
						}
					}

					&:active {
						transform: scale(0.98);
					}
				}

				&.tabs-active button {
					background: var(--clr-red-normal);
					border-color: rgba(255, 255, 255, 0.15);
					box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
					font-weight: 600;

					&::before {
						width: 30px;
					}

					&:hover {
						background: var(--clr-red-normal);
						opacity: 0.9;
						box-shadow: 0 6px 16px rgba(255, 0, 0, 0.4);
					}
				}
			}
		}
	}

	.tabs-button {
		button {
			padding: 14px 28px;
			font-family: var(--font-family-poppins);
			font-weight: 500;
			font-size: 15px;
			color: var(--clr-white);
			background: transparent;
			border: none;
			border-radius: 12px;
			cursor: pointer;
			transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			white-space: nowrap;
			position: relative;
			overflow: hidden;

			.button-content {
				position: relative;
				z-index: 1;
				display: block;
			}

			.button-glow {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 0;
				height: 0;
				background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
				opacity: 0;
				transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
			}

			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

				.button-glow {
					width: 200%;
					height: 200%;
					opacity: 1;
				}
			}
		}

		&.tabs-active button {
			background: var(--clr-red-normal);
			font-weight: 600;
			box-shadow: 0 4px 12px rgba(255, 0, 0, 0.2);
			transform: translateY(-2px);

			&:hover {
				transform: translateY(-3px);
				box-shadow: 0 6px 16px rgba(255, 0, 0, 0.3);
			}
		}

		@media screen and (min-width: 993px) {
			button {
				&:hover {
					background: rgba(255, 255, 255, 0.05);
				}
			}

			&.tabs-active button {
				background: var(--clr-red-normal);
				position: relative;
				overflow: hidden;

				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 30px;
					height: 3px;
					background: rgba(255, 255, 255, 0.5);
					border-radius: 2px;
				}
			}
		}
	}

	.tabs-body {
		position: relative;
		width: 100%;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding: 0 16px;
	}

	.card-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 32px;
		padding: 0;

		@media screen and (max-width: 992px) {
			gap: 24px;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
			gap: 20px;
		}

		@media screen and (max-width: 480px) {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}

	.loading-state {
		text-align: center;
		color: var(--clr-white);
		font-size: 1.8rem;
		padding: 40px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.pagination-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin-top: 40px;
		padding: 24px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 16px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

		.pagination-btn {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 14px 28px;
			background: var(--clr-violet-dark);
			color: white;
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 12px;
			font-weight: 600;
			font-size: 15px;
			cursor: pointer;
			transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

			&:hover:not(:disabled) {
				transform: translateY(-2px);
				background: var(--clr-purple-normal);
				box-shadow: 0 6px 16px rgba(108, 92, 231, 0.3);
				border-color: rgba(255, 255, 255, 0.2);
			}

			&:active:not(:disabled) {
				transform: translateY(0);
			}

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
				background: var(--clr-violet-dark);
				transform: none;
				box-shadow: none;
			}

			svg {
				width: 20px;
				height: 20px;
				transition: transform 0.3s ease;
			}

			&:hover:not(:disabled) svg {
				transform: scale(1.1);
			}
		}

		.page-info {
			color: white;
			font-weight: 500;
			font-size: 16px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			background: rgba(255, 255, 255, 0.05);
			padding: 12px 24px;
			border-radius: 12px;
			border: 1px solid rgba(255, 255, 255, 0.08);
		}
	}
`;
