import styled from "styled-components";
import { StarRating } from "../common";
import { Link } from "react-router-dom";
import { BsStar, BsCalendar3 } from "react-icons/bs";
import PropTypes from "prop-types";

const CardTop = styled.div`
	height: 240px;
	overflow: hidden;
	position: relative;
	background: #1a1a2e;

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
`;

const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	backface-visibility: hidden;
	transform-origin: center;
	aspect-ratio: 16/9;
`;

const CardOverlay = styled.div`
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
`;

const RatingsCount = styled.div`
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
`;

const CardBottom = styled.div`
	flex: 1;
	padding: 24px;
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
`;

const CardTitle = styled.h4`
	font-size: 20px;
	font-weight: 700;
	font-family: var(--font-family-poppins);
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
	text-transform: uppercase;
`;

const BlockWrap = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const CardButton = styled(Link)`
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
	text-transform: uppercase;

	&:hover {
		background: #6c5ce7;
		box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
	}
`;

const DetailsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const DetailsItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: rgba(255, 255, 255, 0.9);
	font-size: 15px;

	svg {
		color: #6c5ce7;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
	}
`;

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

		${CardTop}::after {
			opacity: 0.7;
		}

		${CardImage} {
			transform: scale(1.1);
		}

		${CardButton} {
			background: #6c5ce7;
			transform: translateY(-2px);
			box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
		}
	}
`;

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
		<GameItemWrapper>
			<CardTop>
				<CardImage
					src={gameItem?.background_image}
					alt={gameItem?.name || "Game image"}
					onError={handleImageError}
				/>
				<CardOverlay>
					<StarRating rating={gameItem?.rating} />
					<RatingsCount>
						{gameItem?.ratings_count || 0}
						<BsStar size={12} />
					</RatingsCount>
				</CardOverlay>
			</CardTop>
			<CardBottom>
				<CardTitle>{gameItem?.name || ""}</CardTitle>
				<BlockWrap>
					<DetailsGroup>
						<DetailsItem>
							<BsCalendar3 />
							<span>{formatDate(gameItem?.released)}</span>
						</DetailsItem>
					</DetailsGroup>
					<CardButton to={`/games/${gameItem?.id}`}>View Details</CardButton>
				</BlockWrap>
			</CardBottom>
		</GameItemWrapper>
	);
};

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

export default GameItem;
