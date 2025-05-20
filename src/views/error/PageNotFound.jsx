/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaGamepad, FaHome } from "react-icons/fa";
import steamBg from "../../assets/images/steam_bg.png";
import { motion } from "motion/react";

const PageNotFound = () => {
	return (
		<PageNotFoundWrapper>
			<div className="container">
				<div className="not-found-content">
					<motion.div
						className="error-code"
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
					>
						<FaGamepad className="game-icon" />
						<h1>404</h1>
					</motion.div>

					<motion.div
						className="error-message"
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<h2>Page Not Found</h2>
						<p>Oops! The page you're looking for doesn't exist.</p>
					</motion.div>

					<motion.div
						className="action-buttons"
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						<Link
							to="/"
							className="home-btn"
						>
							<FaHome className="icon" />
							Return to Home
						</Link>
						<Link
							to="/games"
							className="games-btn"
						>
							<FaGamepad className="icon" />
							Browse Games
						</Link>
					</motion.div>

					<div className="floating-elements">
						{Array.from({ length: 5 }).map((_, index) => (
							<motion.div
								key={index}
								className="floating-item"
								initial={{ y: 0, x: 0 }}
								animate={{
									y: [0, -20, 0],
									x: [0, 10, 0],
								}}
								transition={{
									duration: 3 + index,
									repeat: Infinity,
									delay: index * 0.5,
								}}
							>
								<FaGamepad />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</PageNotFoundWrapper>
	);
};

export default PageNotFound;

const floatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const PageNotFoundWrapper = styled.div`
	background: url(${steamBg}) center/cover no-repeat;
	background-attachment: fixed;
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
		backdrop-filter: blur(5px);
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.not-found-content {
		text-align: center;
		padding: 40px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}

	.error-code {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
		position: relative;

		h1 {
			font-size: 120px;
			font-weight: 800;
			background: linear-gradient(45deg, #ff4757, #ff6b81);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
			margin: 0;
		}

		.game-icon {
			font-size: 64px;
			color: #ff4757;
			position: absolute;
			right: -20px;
			top: 50%;
			transform: translateY(-50%);
			animation: ${floatAnimation} 3s ease-in-out infinite;
		}
	}

	.error-message {
		margin-bottom: 32px;

		h2 {
			font-size: 32px;
			color: #fff;
			margin-bottom: 16px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		}

		p {
			font-size: 18px;
			color: rgba(255, 255, 255, 0.8);
			margin: 0;
		}
	}

	.action-buttons {
		display: flex;
		gap: 16px;
		justify-content: center;

		a {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 12px 24px;
			border-radius: 12px;
			font-weight: 600;
			text-decoration: none;
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(45deg, rgba(255, 71, 87, 0.1), rgba(255, 255, 255, 0.1));
				opacity: 0;
				transition: opacity 0.3s ease;
			}

			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

				&::before {
					opacity: 1;
				}

				.icon {
					transform: scale(1.1);
				}
			}

			.icon {
				transition: transform 0.3s ease;
			}
		}

		.home-btn {
			background: rgba(255, 71, 87, 0.1);
			color: #fff;
			border: 1px solid rgba(255, 71, 87, 0.3);

			&:hover {
				background: rgba(255, 71, 87, 0.2);
			}
		}

		.games-btn {
			background: rgba(255, 255, 255, 0.1);
			color: #fff;
			border: 1px solid rgba(255, 255, 255, 0.2);

			&:hover {
				background: rgba(255, 255, 255, 0.15);
			}
		}
	}

	.floating-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;

		.floating-item {
			position: absolute;
			color: rgba(255, 71, 87, 0.2);
			font-size: 24px;

			&:nth-child(1) {
				top: 10%;
				left: 10%;
			}
			&:nth-child(2) {
				top: 20%;
				right: 15%;
			}
			&:nth-child(3) {
				bottom: 30%;
				left: 20%;
			}
			&:nth-child(4) {
				bottom: 15%;
				right: 25%;
			}
			&:nth-child(5) {
				top: 50%;
				left: 50%;
			}
		}
	}
`;
