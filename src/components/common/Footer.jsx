import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaDiscord, FaSteam } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterWrapper>
			<div className="footer-content">
				<div className="footer-section">
					<h3>GameXRip</h3>
					<p>Your ultimate destination for gaming news, reviews, and community discussions.</p>
					<div className="social-links">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
						<a
							href="https://discord.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaDiscord />
						</a>
						<a
							href="https://store.steampowered.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaSteam />
						</a>
					</div>
				</div>

				<div className="footer-section">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/games">Games</Link>
						</li>
						<li>
							<Link to="/creators">Creators</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h4>Support</h4>
					<ul>
						<li>
							<Link to="/faq">FAQ</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/terms">Terms of Service</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h4>Newsletter</h4>
					<p>Subscribe to our newsletter for the latest updates.</p>
					<div className="newsletter-form">
						<input
							type="email"
							placeholder="Enter your email"
						/>
						<button type="button">Subscribe</button>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>&copy; {currentYear} GameXRip. All rights reserved.</p>
			</div>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	position: relative;
	background: linear-gradient(180deg, #000 0%, #090927 50%, #000 100%);
	color: #fff;
	padding: 4rem 2rem 1rem;
	box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);
	border-top: 1px solid rgba(255, 255, 255, 0.05);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.footer-section {
		h3 {
			color: #ffffff;
			font-size: 1.5rem;
			margin-bottom: 1rem;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		}

		h4 {
			color: #ffffff;
			font-size: 1.2rem;
			margin-bottom: 1rem;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		}

		p {
			color: #a0a0a0;
			line-height: 1.6;
			margin-bottom: 1rem;
		}

		ul {
			list-style: none;
			padding: 0;

			li {
				margin-bottom: 0.5rem;

				a {
					color: #a0a0a0;
					text-decoration: none;
					transition: all 0.3s ease;
					display: inline-block;

					&:hover {
						color: #ffffff;
						transform: translateX(5px);
					}
				}
			}
		}
	}

	.social-links {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;

		a {
			color: #a0a0a0;
			font-size: 1.5rem;
			transition: all 0.3s ease;

			&:hover {
				color: #ffffff;
				transform: translateY(-3px);
			}
		}
	}

	.newsletter-form {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;

		input {
			flex: 1;
			padding: 0.5rem 1rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 4px;
			background: rgba(255, 255, 255, 0.05);
			color: #fff;
			outline: none;

			&::placeholder {
				color: #a0a0a0;
			}

			&:focus {
				border-color: rgba(255, 255, 255, 0.2);
				background: rgba(255, 255, 255, 0.08);
			}
		}

		button {
			padding: 0.5rem 1rem;
			background: rgba(255, 255, 255, 0.1);
			color: #fff;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				background: rgba(255, 255, 255, 0.15);
				transform: translateY(-2px);
			}
		}
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 2rem auto 0;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		text-align: center;

		p {
			color: #a0a0a0;
			font-size: 0.9rem;
		}
	}

	@media (max-width: 768px) {
		padding: 3rem 1rem 1rem;

		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.social-links {
			justify-content: center;
		}

		.newsletter-form {
			flex-direction: column;
		}
	}
`;
