import styled from "styled-components";
import PropTypes from "prop-types";
import { FaGamepad, FaUserTie, FaList } from "react-icons/fa";

const CreatorItem = ({ creatorItem }) => {
	const positions = creatorItem?.positions?.map((position) => position?.name);
	const games = creatorItem?.games?.map((game) => game?.name);

	return (
		<CreatorItemWrapper
			className="card"
			style={{
				background: `linear-gradient(135deg, rgba(35, 35, 55, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%), url(${creatorItem?.image_background}) center/cover no-repeat`,
			}}
		>
			<div className="card-top">
				<img
					src={creatorItem?.image}
					alt={creatorItem?.name}
				/>
				<div className="card-top-overlay"></div>
			</div>
			<div className="card-bottom">
				<h4 className="card-title">{creatorItem?.name}</h4>
				<ul className="card-list-group">
					<li className="list-group-item">
						<div className="item-left">
							<FaGamepad className="item-icon" />
							<span>Games Count:</span>
						</div>
						<span className="item-right">{creatorItem?.games_count}</span>
					</li>
					<li className="list-group-item">
						<div className="item-left">
							<FaUserTie className="item-icon" />
							<span>Position(s):</span>
						</div>
						<span
							className="item-right"
							style={{
								textTransform: "capitalize",
							}}
						>
							{positions?.length > 0 ? positions.join(", ") : ""}
						</span>
					</li>
					<li className="list-group-item games-list">
						<div className="item-left">
							<FaList className="item-icon" />
							<span>Games:</span>
						</div>
						<div className="games-grid">
							{games?.length > 0 ? (
								games.map((game, index) => (
									<span
										key={index}
										className="game-item"
										title={game}
									>
										{game}
									</span>
								))
							) : (
								<span className="no-games">N/A</span>
							)}
						</div>
					</li>
				</ul>
			</div>
		</CreatorItemWrapper>
	);
};

export default CreatorItem;

CreatorItem.propTypes = {
	creatorItem: PropTypes.object,
};

const CreatorItemWrapper = styled.div`
	min-height: 360px;
	margin-bottom: 80px;
	padding: 80px 32px 24px 32px;
	text-align: center;
	border-radius: 20px;
	backdrop-filter: blur(10px);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: visible;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 150px;
		height: 150px;
		background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
		opacity: 0.5;
		transition: all 0.4s ease;
		z-index: 0;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
		opacity: 0;
		transition: opacity 0.4s ease;
		z-index: 0;
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
		border-color: rgba(255, 255, 255, 0.2);

		&::before {
			transform: scale(1.2);
			opacity: 0.7;
		}

		&::after {
			opacity: 1;
		}

		.card-top img {
			transform: scale(1.1);
		}

		.card-title {
			color: #fff;
			text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
		}

		.list-group-item {
			background: rgba(255, 255, 255, 0.08);
			border-color: rgba(255, 255, 255, 0.15);
		}
	}

	.card-title {
		font-size: 24px;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transition: all 0.3s ease;
	}

	.card-top {
		height: 150px;
		width: 150px;
		margin: -75px auto 0;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid rgba(255, 255, 255, 0.2);
		transition: all 0.4s ease;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		background: rgba(0, 0, 0, 0.2);

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: center;
			padding: 8px;
			transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
			background: rgba(0, 0, 0, 0.1);
		}

		.card-top-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
			opacity: 0;
			transition: opacity 0.3s ease;
			pointer-events: none;
		}

		&:hover .card-top-overlay {
			opacity: 1;
		}
	}

	.card-bottom {
		margin-top: 48px;
		position: relative;
		z-index: 1;
	}

	.card-list-group {
		list-style: none;
		padding: 0;
		margin: 24px 0 0;
		display: flex;
		flex-direction: column;
		gap: 16px;

		.list-group-item {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding: 12px 16px;
			background: rgba(255, 255, 255, 0.05);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 12px;
			transition: all 0.3s ease;

			&.games-list {
				flex-direction: column;
				align-items: flex-start;
				gap: 12px;

				.games-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
					gap: 8px;
					width: 100%;
					margin-top: 8px;

					.game-item {
						background: rgba(255, 255, 255, 0.05);
						padding: 6px 12px;
						border-radius: 6px;
						font-size: 13px;
						color: rgba(255, 255, 255, 0.8);
						transition: all 0.3s ease;
						text-align: center;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						cursor: help;
						max-width: 100%;
						display: inline-block;

						&:hover {
							background: rgba(255, 255, 255, 0.1);
							transform: translateY(-2px);
							white-space: normal;
							word-break: break-word;
							position: relative;
							z-index: 1;
						}
					}

					.no-games {
						color: rgba(255, 255, 255, 0.5);
						font-style: italic;
					}
				}
			}

			&:hover {
				background: rgba(255, 255, 255, 0.08);
				transform: translateX(5px);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
			}

			.item-left {
				display: flex;
				align-items: center;
				gap: 12px;
				color: rgba(255, 255, 255, 0.9);
				font-weight: 600;

				.item-icon {
					font-size: 18px;
					color: rgba(255, 255, 255, 0.7);
					transition: all 0.3s ease;
				}
			}

			.item-right {
				color: rgba(255, 255, 255, 0.7);
				font-size: 14px;
				transition: all 0.3s ease;
			}

			&:hover {
				.item-icon {
					color: #fff;
					transform: scale(1.1) rotate(5deg);
				}

				.item-right {
					color: #fff;
					text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
				}
			}
		}
	}
`;
