import styled from "styled-components";
import { banner_image } from "../../utils/images";
import { FaGamepad, FaUsers, FaTrophy, FaStar } from "react-icons/fa6";

const Banner = () => {
	return (
		<BannerWrapper
			className="d-flex align-items-center justify-content-between px-6"
			style={{
				background: `linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), linear-gradient(248.75deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 38.46%), url(${banner_image}) center/cover no-repeat fixed`,
			}}
		>
			<div className="banner-content w-50 text-white">
				<h1 className="banner-title text-uppercase">Best games to play</h1>
				<p className="lead-text text-justify">
					Step into the exhilarating world of live gaming, where you can explore an extensive selection of games spanning every genre imaginable. Whether you're a casual player or
					a dedicated enthusiast, our platform offers something for everyone, ensuring you'll always find new adventures and challenges to enjoy.
				</p>
			</div>
			<div className="banner-stats w-50 d-flex flex-column align-items-end">
				<div className="stats-grid">
					<div className="stat-item">
						<div className="stat-icon-wrapper">
							<FaGamepad className="stat-icon" />
						</div>
						<div className="stat-content">
							<h3>1000+</h3>
							<p>Games Available</p>
						</div>
					</div>
					<div className="stat-item">
						<div className="stat-icon-wrapper">
							<FaUsers className="stat-icon" />
						</div>
						<div className="stat-content">
							<h3>50K+</h3>
							<p>Active Players</p>
						</div>
					</div>
					<div className="stat-item">
						<div className="stat-icon-wrapper">
							<FaTrophy className="stat-icon" />
						</div>
						<div className="stat-content">
							<h3>100+</h3>
							<p>Tournaments</p>
						</div>
					</div>
					<div className="stat-item">
						<div className="stat-icon-wrapper">
							<FaStar className="stat-icon" />
						</div>
						<div className="stat-content">
							<h3>4.8</h3>
							<p>User Rating</p>
						</div>
					</div>
				</div>
			</div>
		</BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	min-height: 490px;
	position: relative;
	overflow: hidden;
	padding: 4rem;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, rgba(157, 78, 221, 0.2), transparent);
		pointer-events: none;
	}

	.banner-title {
		font-family: var(--font-family-right);
		font-size: 48px;
		font-weight: 400;
		letter-spacing: 0.09em;
		line-height: 1.2;
		max-width: 600px;
		margin-bottom: 40px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		position: relative;
		background: linear-gradient(45deg, #fff, #e0e0e0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		&::after {
			content: "";
			position: absolute;
			bottom: -10px;
			left: 0;
			width: 120px;
			height: 4px;
			background: linear-gradient(90deg, var(--clr-purple-normal), transparent);
			border-radius: 2px;
		}
	}

	.lead-text {
		max-width: 600px;
		font-size: 1.1rem;
		line-height: 1.8;
		opacity: 0.9;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		letter-spacing: 0.02em;
	}

	.banner-stats {
		padding-left: 3rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem;
		max-width: 550px;
	}

	.stat-item {
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(12px);
		padding: 2rem;
		border-radius: 16px;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid rgba(157, 78, 221, 0.2);
		position: relative;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(45deg, transparent, rgba(157, 78, 221, 0.15), transparent);
			transform: translateX(-100%);
			transition: 0.6s;
		}

		&:hover {
			transform: translateY(-8px) scale(1.02);
			background: rgba(255, 255, 255, 0.15);
			box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
			border-color: rgba(157, 78, 221, 0.4);

			&::before {
				transform: translateX(100%);
			}

			.stat-icon-wrapper {
				transform: scale(1.1) rotate(5deg);
				background: rgba(157, 78, 221, 0.25);
			}
		}

		.stat-icon-wrapper {
			background: rgba(157, 78, 221, 0.2);
			padding: 1.2rem;
			border-radius: 12px;
			transition: all 0.4s ease;
			box-shadow: 0 4px 15px rgba(157, 78, 221, 0.15);
		}

		.stat-icon {
			font-size: 2.2rem;
			color: #fff;
			transition: all 0.4s ease;
			filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
		}

		.stat-content {
			h3 {
				font-size: 2.2rem;
				font-weight: 700;
				margin: 0;
				background: linear-gradient(45deg, #fff, #e0e0e0);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				line-height: 1;
				margin-bottom: 0.5rem;
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}

			p {
				margin: 0;
				font-size: 0.95rem;
				opacity: 0.95;
				text-transform: uppercase;
				letter-spacing: 0.08em;
				font-weight: 500;
				color: #fff;
			}
		}
	}

	@media screen and (min-width: 992px) {
		.banner-badge {
			font-size: 26px;
		}

		.banner-title {
			font-size: 56px;
		}
	}

	@media screen and (max-width: 991px) {
		flex-direction: column;
		gap: 4rem;
		padding: 3rem 0;
		min-height: auto;
		text-align: center;

		.banner-content,
		.banner-stats {
			width: 100% !important;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.banner-content {
			margin-bottom: 2rem;

			.banner-badge {
				margin: 0 auto 25px;
			}

			.banner-title {
				font-size: 42px;
				margin-left: auto;
				margin-right: auto;

				&::after {
					left: 50%;
					transform: translateX(-50%);
				}
			}

			.lead-text {
				margin: 0 auto;
				font-size: 1rem;
				text-align: center;
			}
		}

		.banner-stats {
			padding-left: 0;
			align-items: center;
		}

		.stats-grid {
			max-width: 100%;
			gap: 1.5rem;
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
		}

		.stat-item {
			padding: 1.5rem;
			gap: 1rem;
			justify-content: center;

			.stat-icon-wrapper {
				padding: 0.8rem;
			}

			.stat-icon {
				font-size: 1.8rem;
			}

			.stat-content {
				text-align: left;
				h3 {
					font-size: 1.8rem;
				}

				p {
					font-size: 0.85rem;
				}
			}
		}
	}

	@media screen and (max-width: 576px) {
		padding: 2rem 0;
		gap: 3rem;

		.banner-title {
			font-size: 36px;
		}

		.stats-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
			max-width: 300px;
			margin: 0 auto;
		}

		.stat-item {
			padding: 1.2rem;
			justify-content: center;
		}
	}
`;
