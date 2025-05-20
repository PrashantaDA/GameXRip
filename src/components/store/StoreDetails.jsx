import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGlobe, FaGamepad } from "react-icons/fa";

const StoreDetails = ({ storeData }) => {
	return (
		<StoreDetailsWrapper>
			<div className="details title">
				<h3 className="details-title-text text-white fw-6 text-uppercase">{storeData?.name}</h3>
			</div>
			<div className="details-grid d-grid">
				<div className="details-left img-fit-cover">
					<img
						src={storeData?.image_background}
						alt={storeData?.name}
					/>
				</div>
				<div className="details-right">
					<h4 className="details-right-title fw-7 text-purple mb-3">
						Store <span className="text-white">Details</span>
					</h4>
					<div
						className="para-text"
						dangerouslySetInnerHTML={{
							__html: storeData?.description?.split(".").splice(0, 2).join(".") + ".",
						}}
					></div>
					<ul className="details-list-group">
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start">
									<FaGlobe size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Website:</span>
							</div>
							<a
								href={`https://${storeData?.domain}`}
								className="item-right item-value fw-4 text-purple"
								target="_blank"
								rel="noopener noreferrer"
							>
								{storeData?.domain}
							</a>
						</li>
						<li className="list-group-item text-white d-flex align-items-center flex-wrap">
							<div className="item-left d-flex align-items-center">
								<span className="item-icon d-flex align-items-center justify-content-start">
									<FaGamepad size={20} />
								</span>
								<span className="item-title text-uppercase fw-6">Games Count:</span>
							</div>
							<span className="item-right item-value fw-4 text-purple">{storeData?.games_count}</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="store-description">
				<h3 className="text-white mb-3">Store Description</h3>
				<div
					className="para-text"
					dangerouslySetInnerHTML={{ __html: storeData?.description }}
				></div>
			</div>
		</StoreDetailsWrapper>
	);
};

export default StoreDetails;

StoreDetails.propTypes = {
	storeData: PropTypes.object,
};

const StoreDetailsWrapper = styled.div`
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
				text-decoration: none;

				&:hover {
					background: rgba(108, 92, 231, 0.2);
					transform: translateY(-1px);
				}
			}
		}
	}

	.store-description {
		margin-top: 48px;
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

		h3 {
			font-size: 24px;
			letter-spacing: 0.5px;
			margin-bottom: 20px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			display: flex;
			align-items: center;
			gap: 12px;
			position: relative;
			z-index: 1;

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
			position: relative;
			z-index: 1;
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

		.store-description {
			padding: 16px;
			margin-top: 32px;

			h3 {
				font-size: 20px;
			}

			.para-text {
				padding: 16px;
			}
		}
	}
`;
