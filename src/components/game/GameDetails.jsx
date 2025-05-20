/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

import { AiFillClockCircle, AiOutlineDesktop, AiFillSetting, AiFillTags } from "react-icons/ai";
import { FaGlobe, FaBook, FaStore } from "react-icons/fa";
import { BsController } from "react-icons/bs";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { StoreItem } from "../store";

const DetailItem = ({ icon: Icon, title, value }) => (
	<ListItem>
		<ItemLeft>
			<IconWrapper>
				<Icon size={20} />
			</IconWrapper>
			<ItemTitle>{title}</ItemTitle>
		</ItemLeft>
		<ItemValue>{value}</ItemValue>
	</ListItem>
);

const GameDetails = ({ gameData }) => {
	const platforms = gameData?.platforms?.map((platform) => platform.platform.name);
	const developers = gameData?.developers?.map((developer) => developer.name);
	const genres = gameData?.genres?.map((genre) => genre.name);
	const publishers = gameData?.publishers?.map((publisher) => publisher.name);

	const formatDate = (dateString) => {
		if (!dateString) return "N/A";
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	const shortDescription = gameData?.description?.split(".").splice(0, 2).join(".") + ".";

	return (
		<GameDetailsWrapper>
			<TitleSection>
				<Title>{gameData?.name}</Title>
			</TitleSection>

			<DetailsGrid>
				<ImageSection>
					<img
						src={gameData?.background_image}
						alt={gameData?.name}
					/>
				</ImageSection>

				<DetailsSection>
					<SectionTitle>
						Game <span>Details</span>
					</SectionTitle>
					<Description dangerouslySetInnerHTML={{ __html: shortDescription }} />

					<DetailsList>
						<DetailItem
							icon={AiFillTags}
							title="Genre(s):"
							value={genres?.join(" | ")}
						/>
						<DetailItem
							icon={AiFillClockCircle}
							title="Release Date:"
							value={formatDate(gameData?.released)}
						/>
						<DetailItem
							icon={AiFillSetting}
							title="Developers:"
							value={developers?.join(", ")}
						/>
						<DetailItem
							icon={AiOutlineDesktop}
							title="Platforms:"
							value={platforms?.join(" | ")}
						/>
						<DetailItem
							icon={FaGlobe}
							title="Publishers:"
							value={publishers?.join(", ")}
						/>
					</DetailsList>
				</DetailsSection>
			</DetailsGrid>

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
					<TabContent>
						<TabTitle>Game Description</TabTitle>
						<Description dangerouslySetInnerHTML={{ __html: gameData?.description }} />
					</TabContent>
				</TabPanel>

				<TabPanel>
					<TabContent>
						<TabTitle>Available Platforms</TabTitle>
						<PlatformsList>
							{gameData?.platforms?.map((item) => (
								<PlatformItem key={item?.platform?.id}>
									<PlatformName>{item?.platform?.name}</PlatformName>
									<PlatformImage
										src={item?.platform?.image_background}
										alt={item?.platform?.image_alt}
									/>
								</PlatformItem>
							))}
						</PlatformsList>
					</TabContent>
				</TabPanel>

				<TabPanel>
					<TabContent>
						<TabTitle>Available On</TabTitle>
						<StoresList>
							{gameData?.stores?.map((item) => (
								<StoreItem
									key={item?.store?.id}
									storeItem={item?.store}
								/>
							))}
						</StoresList>
					</TabContent>
				</TabPanel>
			</Tabs>
		</GameDetailsWrapper>
	);
};

GameDetails.propTypes = {
	gameData: PropTypes.object.isRequired,
};

DetailItem.propTypes = {
	icon: PropTypes.elementType.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.string,
};

const GameDetailsWrapper = styled.div`
	background: rgba(0, 0, 0, 0.16);
	padding: 32px 14px;
	margin-top: 32px;
	backdrop-filter: blur(10px);
	border-radius: 24px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.react-tabs {
		margin-top: 32px;
	}

	.react-tabs__tab-list {
		display: flex;
		gap: 16px;
		margin-bottom: 24px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 16px;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}

		@media (max-width: 768px) {
			gap: 8px;
			padding-bottom: 12px;
		}
	}

	.react-tabs__tab {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
		transition: all 0.3s ease;
		cursor: pointer;
		white-space: nowrap;
		flex-shrink: 0;

		&:hover {
			background: rgba(255, 255, 255, 0.05);
			color: white;
			transform: translateY(-2px);
		}

		.tab-icon {
			font-size: 18px;
			color: var(--clr-purple-normal);
		}

		@media (max-width: 768px) {
			padding: 8px 16px;
			font-size: 14px;

			.tab-icon {
				font-size: 16px;
			}
		}
	}

	.react-tabs__tab--selected {
		background: var(--clr-purple-normal);
		color: white;
		border-color: var(--clr-purple-normal);
		box-shadow: 0 4px 12px rgba(120, 81, 169, 0.3);

		.tab-icon {
			color: white;
		}
	}

	.react-tabs__tab-panel {
		&--selected {
			animation: fadeIn 0.3s ease;
		}
	}
`;

const TitleSection = styled.div`
	margin-bottom: 36px;
	position: relative;
`;

const Title = styled.h3`
	font-size: 28px;
	letter-spacing: 0.04em;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	position: relative;
	display: inline-block;
	padding-bottom: 12px;
	color: white;
	text-transform: uppercase;
	font-weight: 600;

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
`;

const DetailsGrid = styled.div`
	display: grid;
	gap: 24px;
	background: rgba(255, 255, 255, 0.03);
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const ImageSection = styled.div`
	min-height: 320px;
	border-radius: 12px;
	overflow: hidden;
	position: relative;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	&:hover img {
		transform: scale(1.05);
	}
`;

const DetailsSection = styled.div`
	background: rgba(255, 255, 255, 0.02);
	padding: 24px;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.05);
`;

const SectionTitle = styled.h4`
	font-size: 24px;
	letter-spacing: 1px;
	color: var(--clr-purple-normal);
	margin-bottom: 20px;
	font-weight: 700;

	span {
		color: white;
		position: relative;
		display: inline-block;
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-2px);
		}
	}
`;

const Description = styled.div`
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.6;
	margin-bottom: 24px;
`;

const DetailsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	color: white;
	margin-bottom: 16px;
	padding: 12px;
	background: rgba(255, 255, 255, 0.03);
	border-radius: 8px;
	transition: background-color 0.3s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.05);
	}
`;

const ItemLeft = styled.div`
	display: flex;
	align-items: center;
	margin-right: 12px;
`;

const IconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-right: 8px;
	color: var(--clr-purple-normal);
`;

const ItemTitle = styled.span`
	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
`;

const ItemValue = styled.span`
	color: var(--clr-purple-normal);
	font-weight: 400;
	font-size: 14px;
`;

const TabContent = styled.div`
	padding: 24px;
	background: rgba(255, 255, 255, 0.02);
	border-radius: 16px;
	margin-top: 24px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TabTitle = styled.h3`
	color: white;
	margin-bottom: 20px;
	font-size: 20px;
	font-weight: 600;
	position: relative;
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
`;

const PlatformsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
`;

const PlatformItem = styled.div`
	background: rgba(255, 255, 255, 0.03);
	padding: 16px;
	border-radius: 12px;
	text-align: center;
`;

const PlatformName = styled.p`
	color: white;
	margin-bottom: 12px;
	font-weight: 500;
`;

const PlatformImage = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	border-radius: 8px;
`;

const StoresList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 20px;
`;

export default GameDetails;
