import styled from "styled-components";
import PropTypes from "prop-types";

import { AiFillClockCircle, AiOutlineDesktop, AiFillSetting, AiFillTags } from "react-icons/ai";
import { FaGlobe, FaBook, FaStore } from "react-icons/fa";
import { BsController } from "react-icons/bs";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { StoreItem } from "../store";

const GameDetails = ({ gameData }) => {
	let platforms = gameData?.platforms?.map((platform) => platform.platform.name);
	let developers = gameData?.developers?.map((developer) => developer.name);
	let genres = gameData?.genres?.map((genre) => genre.name);
	let publishers = gameData?.publishers?.map((publisher) => publisher.name);

	const formatDate = (dateString) => {
		if (!dateString) return "N/A";
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<GameDetailsWrapper>
			<div className="details title">
				<h3 className="details-title-text text-white fw-6 text-uppercase">{gameData?.name}</h3>
			</div>
			<div className="details-grid d-grid">
				<div className="details-left img-fit-cover">
					<img
						src={`${gameData?.background_image}`}
						alt={gameData?.name}
					/>
				</div>
				<div className="details-right">
					<h4 className="details-right-title fw-7 text-purple mb-3 ">
						Game <span className="text-white">Details</span>
					</h4>
					<div
						className="para-text"
						dangerouslySetInnerHTML={{
							__html: gameData?.description?.split(".").splice(0, 2).join(".") + ".",
						}}
					></div>
					<ul className="details-list-group">
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start">
									<AiFillTags size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Genre(s):</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{genres?.join(" | ")}</span>
						</li>
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start">
									<AiFillClockCircle size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Release Date:</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{formatDate(gameData?.released)}</span>
						</li>

						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start ">
									<AiFillSetting size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Developers:</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{developers?.join(", ")}</span>
						</li>
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start ">
									<AiOutlineDesktop size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Platforms:</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{platforms?.join(" | ")}</span>
						</li>
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start ">
									<FaGlobe size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Publishers:</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{publishers?.join(", ")}</span>
						</li>
					</ul>
				</div>
			</div>
			{/* TABS */}
			<Tabs>
				<TabList>
					<Tab>
						<FaBook className="tab-icon" />
						<span>Description</span>
					</Tab>
					<Tab>
						<BsController className="tab-icon" />
						<span>Platform</span>
					</Tab>
					<Tab>
						<FaStore className="tab-icon" />
						<span>Stores</span>
					</Tab>
				</TabList>
				<TabPanel>
					<div className="tab-content">
						<h3 className="text-white mb-3">Game Description</h3>
						<div
							className="para-text"
							dangerouslySetInnerHTML={{ __html: gameData?.description }}
						></div>
					</div>
				</TabPanel>

				<TabPanel>
					<div className="tab-content">
						<h3 className="text-white mb-3">Available Platforms</h3>
						<div className="platforms-list">
							{gameData?.platforms?.map((item) => (
								<div
									className="platform-item text-white"
									key={item?.platform?.id}
								>
									<p className="platform-name mb-2">{item?.platform?.name}</p>
									<div className="platform-img-wrapper img-fit-cover">
										<img
											className="platform-img"
											src={item?.platform?.image_background}
											alt={item?.platform?.image_alt}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</TabPanel>

				<TabPanel>
					<div className="tab-content">
						<h3 className="text-white mb-3">Available On</h3>
						<div className="card-list">
							{gameData?.stores?.map((item) => (
								<StoreItem
									key={item?.store?.id}
									storeItem={item?.store}
								/>
							))}
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</GameDetailsWrapper>
	);
};

export default GameDetails;

GameDetails.propTypes = {
	gameData: PropTypes.array,
};

const GameDetailsWrapper = styled.div`
	background: rgba(0, 0, 0, 0.16);
	padding: 32px 14px;
	margin-top: 32px;
	backdrop-filter: blur(10px);
	border-radius: 24px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

	.details-title {
		margin-bottom: 36px;
		position: relative;

		&-text {
			font-size: 28px;
			letter-spacing: 0.04em;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
			position: relative;
			display: inline-block;
			padding-bottom: 12px;

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				width: 60px;
				height: 3px;
				background: linear-gradient(90deg, var(--clr-purple-normal), transparent);
				border-radius: 2px;
			}
		}
	}

	.details-grid {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 16px;
		padding: 24px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.details-left {
		min-height: 320px;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

		img {
			transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		}

		&:hover img {
			transform: scale(1.05);
		}
	}

	.details-right {
		margin-top: 24px;
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);

		&-title {
			font-size: 24px;
			letter-spacing: 1px;
			position: relative;
			display: inline-block;
			margin-bottom: 20px;

			span {
				position: relative;
				display: inline-block;
				transition: transform 0.3s ease;

				&:hover {
					transform: translateY(-2px);
				}
			}
		}

		.para-text {
			font-weight: 200;
			opacity: 0.9;
			line-height: 1.6;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
			margin-bottom: 20px;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.details-list-group {
			display: flex;
			flex-direction: column;
			gap: 12px;

			.list-group-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 12px;
				background: rgba(255, 255, 255, 0.03);
				border-radius: 8px;
				transition: all 0.3s ease;
				border: 1px solid rgba(255, 255, 255, 0.05);

				&:hover {
					background: rgba(255, 255, 255, 0.05);
					transform: translateX(4px);
				}
			}

			.item-left {
				display: flex;
				align-items: center;
				gap: 12px;
			}

			.item-icon {
				overflow: hidden;
				width: 32px;
				height: 32px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.3s ease;

				svg {
					color: var(--clr-purple-normal);
					filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
					font-size: 20px;
				}
			}

			.item-title {
				letter-spacing: 0.04em;
				font-size: 14px;
				opacity: 0.9;
				white-space: nowrap;
			}

			.item-value {
				font-size: 14px;
				background: rgba(108, 92, 231, 0.1);
				padding: 4px 12px;
				border-radius: 6px;
				transition: all 0.3s ease;
				max-width: 200px;
				text-align: right;

				&:hover {
					background: rgba(108, 92, 231, 0.2);
					transform: translateY(-1px);
				}
			}
		}
	}

	.platforms-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 20px;

		.platform-item {
			background: rgba(255, 255, 255, 0.03);
			border-radius: 12px;
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 12px;
			position: relative;
			overflow: hidden;

			.platform-name {
				font-weight: 700;
				font-size: 18px;
				color: var(--clr-purple-normal);
				text-align: center;
				text-transform: uppercase;
				letter-spacing: 1px;
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			}

			.platform-img-wrapper {
				height: 100px;
				border-radius: 8px;
				overflow: hidden;
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.3s ease;
				}
			}

			&:hover {
				background: rgba(255, 255, 255, 0.05);
				box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

				.platform-name {
					color: var(--clr-white);
				}

				.platform-img-wrapper img {
					transform: scale(1.1);
				}
			}
		}
	}

	.card-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 28px;
		padding: 16px;

		.store-item {
			background: rgba(255, 255, 255, 0.02);
			border-radius: 24px;
			padding: 28px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 24px;
			cursor: pointer;

			.store-img-wrapper {
				width: 96px;
				height: 96px;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 20px;
				background: rgba(255, 255, 255, 0.05);
				border-radius: 20px;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}

			.store-name {
				font-weight: 600;
				font-size: 20px;
				color: var(--clr-white);
				text-align: center;
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				padding: 0 8px;
			}

			&:hover {
				background: rgba(255, 255, 255, 0.04);
				box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);

				.store-name {
					color: var(--clr-purple-normal);
				}
			}
		}
	}

	@media screen and (min-width: 1080px) {
		padding: 60px 42px;

		.details-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 32px;
			align-items: stretch;
		}

		.details-right {
			margin-top: 0;
		}

		.details-title {
			&-text {
				font-size: 42px;
			}
		}
	}

	.react-tabs {
		margin-top: 48px;

		&__tab-list {
			border-bottom: 2px solid rgba(255, 255, 255, 0.1);
			margin-bottom: 24px;
			display: flex;
			gap: 8px;
			position: relative;

			&::after {
				content: "";
				position: absolute;
				bottom: -2px;
				left: 0;
				width: 100%;
				height: 2px;
				background: linear-gradient(90deg, rgba(108, 92, 231, 0.1), rgba(108, 92, 231, 0.3), rgba(108, 92, 231, 0.1));
				opacity: 0.5;
			}
		}

		&__tab {
			border-radius: 8px 8px 0 0;
			color: var(--clr-white);
			font-weight: 600;
			font-size: 16px;
			letter-spacing: 0.08em;
			padding: 12px 24px;
			margin-top: 6px;
			text-transform: uppercase;
			background: rgba(255, 255, 255, 0.03);
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-bottom: none;
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;
			display: flex;
			align-items: center;
			gap: 8px;

			.tab-icon {
				font-size: 18px;
				opacity: 0.8;
				transition: all 0.3s ease;
			}

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
				transition: 0.5s;
			}

			&:hover {
				background: rgba(255, 255, 255, 0.05);
				transform: translateY(-2px);

				.tab-icon {
					transform: scale(1.1);
					opacity: 1;
				}

				&::before {
					left: 100%;
				}
			}

			&--selected {
				background: var(--clr-purple-normal);
				color: var(--clr-white);
				font-weight: 700;
				box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);

				.tab-icon {
					opacity: 1;
					transform: scale(1.1);
				}
			}
		}

		&__tab-panel {
			background: rgba(255, 255, 255, 0.03);
			border-radius: 12px;
			padding: 24px;
			border: 1px solid rgba(255, 255, 255, 0.05);
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
			position: relative;
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

			.tab-content {
				position: relative;
				z-index: 1;
			}

			h3 {
				font-size: 24px;
				letter-spacing: 0.5px;
				margin-bottom: 20px;
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
				display: flex;
				align-items: center;
				gap: 12px;

				&::before {
					content: "";
					width: 4px;
					height: 24px;
					background: var(--clr-purple-normal);
					border-radius: 2px;
				}
			}

			.para-text {
				line-height: 1.8;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
				background: rgba(255, 255, 255, 0.02);
				padding: 20px;
				border-radius: 8px;
				border: 1px solid rgba(255, 255, 255, 0.05);
			}
		}
	}

	@media screen and (max-width: 768px) {
		padding: 24px 16px;
		margin-top: 24px;

		.details-title-text {
			font-size: 24px;
		}

		.details-grid {
			padding: 16px;
		}

		.details-right {
			padding: 16px;
		}

		.react-tabs__tab {
			padding: 8px 16px;
			font-size: 14px;
		}

		.platforms-list,
		.card-list {
			grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
			gap: 20px;
			padding: 12px;
		}

		.platform-item,
		.store-item {
			padding: 24px;
			gap: 20px;
		}

		.platform-img-wrapper {
			height: 90px;
		}

		.store-img-wrapper {
			width: 72px;
			height: 72px;
			padding: 16px;
		}

		.store-name {
			font-size: 18px;
		}
	}
`;
