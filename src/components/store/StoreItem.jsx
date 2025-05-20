import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StoreItem = ({ storeItem }) => {
	return (
		<StoreItemWrapper className="card d-grid">
			<div className="card-img img-fit-cover">
				<img
					src={storeItem?.image_background}
					alt={storeItem?.id || ""}
				/>
			</div>
			<div className="card-text d-flex flex-column justify-content-start">
				<Link to={`stores/${storeItem?.id}`}>
					<h5 className="card-title text-uppercase fw-7">{storeItem?.name}</h5>
				</Link>
				<ul className="card-info">
					<li>
						<a
							href={`https://${storeItem?.domain}`}
							target="_blank"
						>
							{storeItem?.domain}
						</a>
					</li>
					<li>
						<span className="fw-7 ">Games Count: </span>
						{storeItem?.games_count}
					</li>
				</ul>
				<div className="games-section">
					{storeItem?.games && <p className="fw-7 text-white">Top Games: </p>}
					<ul className="card-games d-flex flex-wrap">
						{storeItem?.games?.map((item) => {
							return (
								<li
									className="card-game"
									key={item?.id}
								>
									<Link to={`games/${item.id}`}>{item.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</StoreItemWrapper>
	);
};

export default StoreItem;

StoreItem.propTypes = {
	storeItem: PropTypes.object,
};

const StoreItemWrapper = styled.div`
	grid-template-columns: 1fr;
	min-height: 320px;
	margin: 0;
	background: rgba(12, 10, 36, 0.8);
	border-radius: 16px;
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	border: 1px solid rgba(157, 78, 221, 0.15);
	backdrop-filter: blur(10px);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	position: relative;
	display: flex;
	flex-direction: column;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, rgba(157, 78, 221, 0.1), transparent);
		opacity: 0;
		transition: opacity 0.4s ease;
		z-index: 1;
		pointer-events: none;
	}

	&:hover {
		transform: translateY(-5px) scale(1.02);
		box-shadow: 0 12px 40px rgba(157, 78, 221, 0.25);
		border-color: rgba(157, 78, 221, 0.4);

		&::before {
			opacity: 1;
		}

		.card-img::after {
			opacity: 0.7;
		}

		.card-title {
			color: var(--clr-purple-normal);
			transform: translateX(5px);
		}

		.store-link {
			transform: translateY(0);
			opacity: 1;
			background: var(--clr-purple-normal);
			border-color: var(--clr-purple-normal);
		}

		.games-count {
			background: rgba(157, 78, 221, 0.3);
			border-color: rgba(157, 78, 221, 0.5);
		}

		.card-img img {
			transform: scale(1.1);
		}

		.card-games li {
			transform: translateY(-2px);
			background: rgba(157, 78, 221, 0.2);
			border-color: rgba(157, 78, 221, 0.4);
		}
	}

	.card-img {
		position: relative;
		height: 160px;
		overflow: hidden;
		flex-shrink: 0;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(12, 10, 36, 0.2), rgba(12, 10, 36, 0.8));
			opacity: 0.5;
			transition: opacity 0.4s ease;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		}
	}

	.card-text {
		padding: 20px;
		position: relative;
		background: linear-gradient(180deg, rgba(12, 10, 36, 0.9) 0%, rgba(12, 10, 36, 0.95) 100%);
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 16px;

		.card-title {
			font-size: 20px;
			color: #fff;
			letter-spacing: 0.5px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
			transition: all 0.3s ease;
			display: flex;
			align-items: center;
			gap: 10px;
			margin: 0;
			line-height: 1.2;
			height: 28px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			position: relative;

			&::before {
				content: "🎮";
				font-size: 16px;
				flex-shrink: 0;
				transition: transform 0.3s ease;
			}

			&:hover::before {
				transform: rotate(15deg);
			}
		}

		.card-info {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 8px;

			li {
				color: rgba(255, 255, 255, 0.7);
				font-size: 14px;
				display: flex;
				align-items: center;
				gap: 8px;
				height: 24px;

				a {
					color: var(--clr-purple-normal);
					text-decoration: none;
					transition: all 0.3s ease;
					font-weight: 500;
					display: inline-flex;
					align-items: center;
					gap: 6px;
					padding: 4px 10px;
					border-radius: 6px;
					background: rgba(157, 78, 221, 0.15);
					border: 1px solid rgba(157, 78, 221, 0.3);
					box-shadow: 0 2px 8px rgba(157, 78, 221, 0.1);
					height: 100%;
					position: relative;
					overflow: hidden;

					&::before {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(45deg, transparent, rgba(157, 78, 221, 0.1), transparent);
						transform: translateX(-100%);
						transition: transform 0.6s ease;
					}

					&:hover {
						color: #fff;
						text-decoration: none;
						background: rgba(157, 78, 221, 0.25);
						border-color: rgba(157, 78, 221, 0.5);
						transform: translateY(-2px);
						box-shadow: 0 4px 12px rgba(157, 78, 221, 0.2);

						&::before {
							transform: translateX(100%);
						}
					}

					&::after {
						content: "↗";
						font-size: 12px;
						opacity: 0.7;
						transition: transform 0.3s ease;
					}

					&:hover::after {
						transform: translate(2px, -2px);
					}
				}
			}
		}

		.games-section {
			display: flex;
			flex-direction: column;
			gap: 12px;

			p {
				margin: 0;
				font-size: 14px;
				height: 20px;
				display: flex;
				align-items: center;
				color: #fff;
				font-weight: 600;
			}

			.card-games {
				gap: 6px;
				margin: 0;
				padding: 0;
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				min-height: 32px;

				li {
					background: rgba(157, 78, 221, 0.1);
					border: 1px solid rgba(157, 78, 221, 0.2);
					border-radius: 8px;
					padding: 4px 10px;
					height: 28px;
					transition: all 0.3s ease;
					box-shadow: 0 2px 8px rgba(157, 78, 221, 0.1);
					position: relative;
					overflow: hidden;

					&::before {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(45deg, transparent, rgba(157, 78, 221, 0.1), transparent);
						transform: translateX(-100%);
						transition: transform 0.6s ease;
					}

					&:hover {
						background: rgba(157, 78, 221, 0.2);
						transform: translateY(-2px);
						border-color: rgba(157, 78, 221, 0.4);
						box-shadow: 0 4px 12px rgba(157, 78, 221, 0.2);

						&::before {
							transform: translateX(100%);
						}
					}

					a {
						font-weight: 500;
						color: #fff;
						font-size: 13px;
						text-decoration: none;
						transition: all 0.3s ease;
						display: flex;
						align-items: center;
						gap: 6px;
						white-space: nowrap;
						height: 100%;

						&:hover {
							color: var(--clr-purple-normal);
						}
					}
				}
			}
		}
	}

	.store-link {
		position: absolute;
		top: 16px;
		right: 16px;
		background: rgba(157, 78, 221, 0.2);
		border: 1px solid rgba(157, 78, 221, 0.3);
		padding: 6px 12px;
		border-radius: 8px;
		color: #fff;
		font-size: 13px;
		font-weight: 500;
		text-decoration: none;
		backdrop-filter: blur(4px);
		transform: translateY(-10px);
		opacity: 0;
		transition: all 0.3s ease;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 6px;
		box-shadow: 0 4px 12px rgba(157, 78, 221, 0.2);
		height: 32px;
		position: relative;
		overflow: hidden;

		&::before {
			content: "🔗";
			font-size: 14px;
			transition: transform 0.3s ease;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(45deg, transparent, rgba(157, 78, 221, 0.1), transparent);
			transform: translateX(-100%);
			transition: transform 0.6s ease;
		}

		&:hover {
			background: var(--clr-purple-normal);
			border-color: var(--clr-purple-normal);
			transform: translateY(-2px);
			box-shadow: 0 6px 16px rgba(157, 78, 221, 0.3);

			&::before {
				transform: rotate(15deg);
			}

			&::after {
				transform: translateX(100%);
			}
		}
	}
`;
