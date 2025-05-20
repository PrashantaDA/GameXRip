/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaUsers, FaGamepad, FaTrophy, FaHeart } from "react-icons/fa";

const AboutPage = () => {
	return (
		<AboutWrapper>
			<HeroSection>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					About <span>GameXRip</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Your Ultimate Gaming Community
				</motion.p>
			</HeroSection>

			<MissionSection>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mission-content"
				>
					<h2>Our Mission</h2>
					<p>
						At GameXRip, we're passionate about creating a vibrant gaming community where players can discover new games, connect with creators, and share their gaming experiences.
						Our platform brings together gamers, developers, and content creators in one unified space.
					</p>
				</motion.div>

				<StatsGrid>
					<StatCard
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<FaUsers className="icon" />
						<h3>10K+</h3>
						<p>Active Users</p>
					</StatCard>
					<StatCard
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<FaGamepad className="icon" />
						<h3>5K+</h3>
						<p>Games Listed</p>
					</StatCard>
					<StatCard
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<FaTrophy className="icon" />
						<h3>100+</h3>
						<p>Top Creators</p>
					</StatCard>
				</StatsGrid>
			</MissionSection>

			<ValuesSection>
				<h2>Our Values</h2>
				<ValuesGrid>
					<ValueCard
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.9 }}
					>
						<FaHeart className="icon" />
						<h3>Community First</h3>
						<p>Building a supportive and inclusive gaming community where everyone feels welcome.</p>
					</ValueCard>
					<ValueCard
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
					>
						<FaGamepad className="icon" />
						<h3>Quality Content</h3>
						<p>Curating and promoting high-quality games and content that gamers love.</p>
					</ValueCard>
					<ValueCard
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.1 }}
					>
						<FaUsers className="icon" />
						<h3>Creator Support</h3>
						<p>Empowering game developers and content creators to reach their audience.</p>
					</ValueCard>
				</ValuesGrid>
			</ValuesSection>

			<JoinSection>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					className="join-content"
				>
					<h2>Join Our Community</h2>
					<p>Be part of the fastest-growing gaming community. Connect, share, and discover amazing games.</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Get Started
					</motion.button>
				</motion.div>
			</JoinSection>
		</AboutWrapper>
	);
};

export default AboutPage;

const AboutWrapper = styled.div`
	min-height: 100vh;
	background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
	color: #fff;
	padding: 2rem;
`;

const HeroSection = styled.section`
	text-align: center;
	padding: 4rem 0;

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		color: #fff;

		span {
			background: linear-gradient(45deg, #333333, #666666);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	p {
		font-size: 1.2rem;
		color: #a0a0a0;
	}
`;

const MissionSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 0;

	.mission-content {
		text-align: center;
		margin-bottom: 4rem;

		h2 {
			font-size: 2.5rem;
			margin-bottom: 1.5rem;
			color: #ffffff;
		}

		p {
			font-size: 1.1rem;
			line-height: 1.8;
			color: #a0a0a0;
			max-width: 800px;
			margin: 0 auto;
		}
	}
`;

const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	padding: 2rem;
	text-align: center;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.08);
	}

	.icon {
		font-size: 2.5rem;
		color: #ffffff;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 2rem;
		color: #fff;
		margin-bottom: 0.5rem;
	}

	p {
		color: #a0a0a0;
	}
`;

const ValuesSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 0;
	text-align: center;

	h2 {
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #ffffff;
	}
`;

const ValuesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

const ValueCard = styled(motion.div)`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	padding: 2rem;
	text-align: center;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.08);
	}

	.icon {
		font-size: 2.5rem;
		color: #ffffff;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 1.5rem;
		color: #fff;
		margin-bottom: 1rem;
	}

	p {
		color: #a0a0a0;
		line-height: 1.6;
	}
`;

const JoinSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 0;
	text-align: center;

	.join-content {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		padding: 3rem;

		h2 {
			font-size: 2.5rem;
			margin-bottom: 1.5rem;
			color: #ffffff;
		}

		p {
			font-size: 1.1rem;
			color: #a0a0a0;
			margin-bottom: 2rem;
			max-width: 600px;
			margin-left: auto;
			margin-right: auto;
		}

		button {
			background: #333333;
			color: #fff;
			border: none;
			padding: 1rem 2rem;
			font-size: 1.1rem;
			border-radius: 5px;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				background: #444444;
				transform: translateY(-2px);
			}
		}
	}
`;
