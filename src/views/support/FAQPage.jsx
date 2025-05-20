import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";
import { Breadcrumb } from "../../components/common";

const FAQPage = () => {
	const faqItems = [
		{
			question: "What is GameXRip?",
			answer:
				"GameXRip is a comprehensive gaming platform that provides detailed information about games, including reviews, system requirements, and where to purchase them. We aim to be your one-stop destination for all gaming-related information.",
		},
		{
			question: "How do I find games on GameXRip?",
			answer:
				"You can browse games through our main navigation menu. We offer various ways to discover games, including browsing by genre, platform, or using our search feature. Each game page provides detailed information about the game, including screenshots, videos, and purchase options.",
		},
		{
			question: "Is GameXRip free to use?",
			answer: "Yes, GameXRip is completely free to use. We provide all our game information and community features at no cost to our users.",
		},
		{
			question: "How can I contact support?",
			answer: "You can reach our support team through the Contact page. We offer 24/7 online support and typically respond to inquiries within 24 hours.",
		},
		{
			question: "Can I contribute to GameXRip?",
			answer:
				"Yes! We welcome community contributions. You can share your gaming experiences, write reviews, and participate in discussions. Visit our About page to learn more about how you can get involved.",
		},
		{
			question: "How do I stay updated with new games?",
			answer: "You can subscribe to our newsletter through the footer of any page. We also regularly update our homepage with the latest game releases and news.",
		},
	];

	return (
		<FAQPageWrapper>
			<div className="container">
				<Breadcrumb dataNameById="FAQ" />
				<div className="faq-content">
					<div className="faq-header">
						<h1>Frequently Asked Questions</h1>
						<p className="subtitle">Find answers to common questions about GameXRip</p>
					</div>

					<div className="faq-grid">
						{faqItems.map((item, index) => (
							<div
								key={index}
								className="faq-item"
							>
								<div className="faq-icon">
									<FaQuestionCircle />
								</div>
								<div className="faq-text">
									<h3>{item.question}</h3>
									<p>{item.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</FAQPageWrapper>
	);
};

export default FAQPage;

const FAQPageWrapper = styled.div`
	padding: 65px 0;
	min-height: 100vh;
	background: linear-gradient(135deg, var(--clr-violet-darker) 0%, var(--clr-dark) 100%);

	.faq-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 32px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.faq-header {
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

	.faq-grid {
		display: grid;
		gap: 24px;
	}

	.faq-item {
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		gap: 20px;
		transition: all 0.3s ease;

		&:hover {
			transform: translateY(-2px);
			background: rgba(255, 255, 255, 0.04);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		}

		.faq-icon {
			width: 48px;
			height: 48px;
			background: var(--clr-purple-normal);
			border-radius: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;

			svg {
				font-size: 24px;
				color: white;
			}
		}

		.faq-text {
			h3 {
				color: white;
				font-size: 20px;
				margin-bottom: 12px;
				font-weight: 600;
			}

			p {
				color: rgba(255, 255, 255, 0.8);
				line-height: 1.6;
			}
		}
	}

	@media (max-width: 768px) {
		.faq-item {
			flex-direction: column;
			align-items: center;
			text-align: center;

			.faq-icon {
				margin-bottom: 16px;
			}
		}
	}
`;
