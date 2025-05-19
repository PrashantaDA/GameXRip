import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

import { apiURL } from "../../constants";
import { StarRating } from "../common/index";
import axios from "../../api/axios";

import PropTypes from "prop-types";

const API_KEY = import.meta.env.VITE_API_KEY;

const GenreItem = ({ gameItem }) => {
	const [gameData, setGameData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${apiURL.gamesURL}/${gameItem.id}?${API_KEY}`);
			setGameData(data);
		};
		fetchData();
	}, [gameItem.id]);

	return (
		<GenreItemWrapper className="card">
			<div className="card-top img-fit-cover">
				<img
					src={gameData?.background_image}
					alt={gameData?.name}
				/>
				<div className="card-overlay">
					<StarRating rating={gameData?.rating} />
					<div className="ratings-count">
						{gameData?.ratings_count || 0}{" "}
						<BsStar
							className="ms-1"
							size={12}
						/>
					</div>
				</div>
			</div>
			<div className="card-bottom">
				<h4 className="text-white text-uppercase card-title">{gameData?.name || ""}</h4>
				<Link
					to={`/games/${gameData?.id}`}
					className="card-button text-uppercase"
				>
					View Details
				</Link>
			</div>
		</GenreItemWrapper>
	);
};

export default GenreItem;

GenreItem.propTypes = {
	gameItem: PropTypes.object,
};

const GenreItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 380px;
	background: #1a1a2e;
	border-radius: 16px;
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
	position: relative;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

		.card-top::after {
			opacity: 0.7;
		}

		.card-top img {
			transform: scale(1.1);
		}

		.card-button {
			background: #6c5ce7;
			transform: translateY(-2px);
			box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
		}
	}

	.card-top {
		height: 240px;
		overflow: hidden;
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(26, 26, 46, 0.2) 0%, rgba(26, 26, 46, 0.8) 100%);
			opacity: 0.5;
			transition: opacity 0.4s ease;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
			backface-visibility: hidden;
			transform-origin: center;
		}

		.card-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20px;
		}

		.ratings-count {
			position: absolute;
			left: 20px;
			bottom: 20px;
			font-weight: 600;
			font-size: 14px;
			padding: 8px 16px;
			border-radius: 30px;
			background: rgba(255, 255, 255, 0.95);
			color: #1a1a2e;
			z-index: 2;
			display: flex;
			align-items: center;
			gap: 6px;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(4px);
		}
	}

	.card-bottom {
		flex: 1;
		padding: 24px;
		display: flex;
		flex-direction: column;
		background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);

		.card-title {
			font-size: 20px;
			font-weight: 700;
			font-family: var(--font-family-poppins) !important;
			letter-spacing: 0.02em;
			margin-bottom: 16px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			line-height: 1.3;
			min-height: 52px;
			color: #ffffff;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		}

		.card-button {
			margin-top: auto;
			height: 44px;
			text-align: center;
			border: none;
			padding: 0px 24px;
			color: #ffffff;
			font-weight: 600;
			letter-spacing: 0.03em;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			border-radius: 12px;
			text-decoration: none;
			background: rgba(108, 92, 231, 0.1);
			border: 2px solid #6c5ce7;

			&:hover {
				background: #6c5ce7;
				box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
			}
		}
	}
`;
