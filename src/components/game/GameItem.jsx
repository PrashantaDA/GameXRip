import styled from "styled-components";
import { StarRating } from "../common";
import { Link } from "react-router-dom";
import { BsStar, BsCalendar3 } from "react-icons/bs";
import PropTypes from "prop-types";

const GameItem = ({ gameItem }) => {
	const handleImageError = (e) => {
		e.target.src = "https://via.placeholder.com/400x280?text=No+Image+Available";
	};

	const formatDate = (dateString) => {
		if (!dateString) return "N/A";
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<GameItemWrapper className="card">
			<div className="card-top img-fit-cover">
				<img
					src={gameItem?.background_image}
					alt={gameItem?.name || "Game image"}
					onError={handleImageError}
				/>
				<div className="card-overlay">
					<StarRating rating={gameItem?.rating} />
					<div className="ratings-count">
						{gameItem?.ratings_count || 0}{" "}
						<BsStar
							className="ms-1"
							size={12}
						/>
					</div>
				</div>
			</div>
			<div className="card-bottom">
				<h4 className="text-white text-uppercase card-title">{gameItem?.name || "Untitled Game"}</h4>
				<div className="block-wrap">
					<div className="details-group">
						<div className="details-item">
							<BsCalendar3 className="icon" />
							<span>{formatDate(gameItem?.released)}</span>
						</div>
					</div>
					<Link
						to={`/games/${gameItem?.id}`}
						className="card-button text-uppercase"
					>
						View Details
					</Link>
				</div>
			</div>
		</GameItemWrapper>
	);
};

export default GameItem;

GameItem.propTypes = {
	gameItem: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		background_image: PropTypes.string,
		rating: PropTypes.number,
		ratings_count: PropTypes.number,
		released: PropTypes.string,
		updated: PropTypes.string,
	}).isRequired,
};

const GameItemWrapper = styled.div`
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

		.block-wrap {
			margin-top: auto;
			display: flex;
			flex-direction: column;
			gap: 16px;
		}

		.card-button {
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

	.details-group {
		.details-item {
			display: flex;
			align-items: center;
			gap: 10px;
			color: rgba(255, 255, 255, 0.9);
			font-size: 15px;

			.icon {
				color: #6c5ce7;
				filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
			}
		}
	}
`;
