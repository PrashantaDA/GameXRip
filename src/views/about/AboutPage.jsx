/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGamepad, FaUsers, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { Breadcrumb } from "../../components/common";

const AboutPage = () => {
	return (
		<AboutPageWrapper>
			<div className="container">
				<Breadcrumb dataNameById="About Us" />
				<div className="about-content">
					<div className="about-header">
						<h1>About GameXRip</h1>
						<p className="subtitle">Your Ultimate Gaming Platform</p>
					</div>

					<div className="about-section">
						<div className="section-content">
							<h2>Our Mission</h2>
							<p>
								At GameXRip, we're dedicated to providing gamers with a seamless and enjoyable gaming experience. Our platform offers a vast collection of games, detailed
								information, and a vibrant community for gamers to connect and share their passion.
							</p>
						</div>
					</div>

					<div className="features-grid">
						<div className="feature-card">
							<div className="feature-icon">
								<FaGamepad />
							</div>
							<h3>Extensive Game Library</h3>
							<p>Access a comprehensive collection of games across various platforms and genres.</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">
								<FaUsers />
							</div>
							<h3>Community Driven</h3>
							<p>Join a thriving community of gamers, share experiences, and discover new games.</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">
								<FaGlobe />
							</div>
							<h3>Global Reach</h3>
							<p>Connect with gamers worldwide and explore games from different cultures.</p>
						</div>

						<div className="feature-card">
							<div className="feature-icon">
								<FaShieldAlt />
							</div>
							<h3>Secure Platform</h3>
							<p>Enjoy a safe and secure gaming environment with our robust security measures.</p>
						</div>
					</div>

					<div className="about-section">
						<div className="section-content">
							<h2>Our Story</h2>
							<p>
								GameXRip was born from a passion for gaming and a vision to create a platform that brings gamers together. We understand the importance of having a reliable source
								for game information and a community to share experiences with.
							</p>
							<p>
								Our team of dedicated gaming enthusiasts works tirelessly to ensure that GameXRip remains the go-to platform for gamers worldwide. We're constantly evolving and
								adding new features to enhance your gaming experience.
							</p>
						</div>
					</div>

					<div className="about-section">
						<div className="section-content">
							<h2>Join Our Community</h2>
							<p>
								Whether you're a casual gamer or a hardcore enthusiast, GameXRip welcomes you to join our growing community. Share your gaming experiences, discover new games, and
								connect with fellow gamers from around the world.
							</p>
						</div>
					</div>
				</div>
			</div>
		</AboutPageWrapper>
	);
};

export default AboutPage;

const AboutPageWrapper = styled.div`
	padding: 65px 0;
	min-height: 100vh;
	background: linear-gradient(135deg, var(--clr-violet-darker) 0%, var(--clr-dark) 100%);

	.about-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 32px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.about-header {
		text-align: center;
		margin-bottom: 48px;

		h1 {
			font-size: 36px;
			color: white;
			margin-bottom: 16px;
			text-transform: uppercase;
			letter-spacing: 1px;
		}

		.subtitle {
			font-size: 18px;
			color: var(--clr-purple-normal);
			font-weight: 500;
		}
	}

	.about-section {
		margin-bottom: 48px;

		.section-content {
			background: rgba(255, 255, 255, 0.02);
			padding: 32px;
			border-radius: 16px;
			border: 1px solid rgba(255, 255, 255, 0.05);

			h2 {
				color: white;
				font-size: 24px;
				margin-bottom: 16px;
				font-weight: 600;
			}

			p {
				color: rgba(255, 255, 255, 0.8);
				line-height: 1.6;
				margin-bottom: 16px;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	.features-grid {
		display: grid;
		gap: 24px;
		margin-bottom: 48px;

		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		text-align: center;

		.feature-icon {
			width: 48px;
			height: 48px;
			background: var(--clr-purple-normal);
			border-radius: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto 16px;

			svg {
				font-size: 24px;
				color: white;
			}
		}

		h3 {
			color: white;
			font-size: 20px;
			margin-bottom: 8px;
			font-weight: 600;
		}

		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.5;
		}
	}
`;
