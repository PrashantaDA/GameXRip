import styled from "styled-components";
import { FaShieldAlt } from "react-icons/fa";
import { Breadcrumb } from "../../components/common";

const PrivacyPolicyPage = () => {
	const sections = [
		{
			title: "Information We Collect",
			content:
				"We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us. This may include your name, email address, and any other information you choose to provide.",
		},
		{
			title: "How We Use Your Information",
			content:
				"We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect GameXRip and our users. We also use this information to communicate with you about our services and to personalize your experience.",
		},
		{
			title: "Information Sharing",
			content:
				"We do not share your personal information with third parties except as described in this privacy policy. We may share information with service providers who assist us in operating our website and conducting our business.",
		},
		{
			title: "Data Security",
			content:
				"We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.",
		},
		{
			title: "Your Rights",
			content:
				"You have the right to access, correct, or delete your personal information. You can also object to our processing of your personal information or request that we restrict our processing of your personal information.",
		},
		{
			title: "Changes to This Policy",
			content:
				"We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date.",
		},
	];

	return (
		<PrivacyPolicyPageWrapper>
			<div className="container">
				<Breadcrumb dataNameById="Privacy Policy" />
				<div className="privacy-content">
					<div className="privacy-header">
						<div className="header-icon">
							<FaShieldAlt />
						</div>
						<h1>Privacy Policy</h1>
						<p className="subtitle">Last Updated: {new Date().toLocaleDateString()}</p>
					</div>

					<div className="privacy-sections">
						{sections.map((section, index) => (
							<div
								key={index}
								className="privacy-section"
							>
								<h2>{section.title}</h2>
								<p>{section.content}</p>
							</div>
						))}
					</div>

					<div className="contact-section">
						<h2>Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@gamexrip.com">privacy@gamexrip.com</a>
						</p>
					</div>
				</div>
			</div>
		</PrivacyPolicyPageWrapper>
	);
};

export default PrivacyPolicyPage;

const PrivacyPolicyPageWrapper = styled.div`
	padding: 65px 0;
	min-height: 100vh;
	background: linear-gradient(135deg, var(--clr-violet-darker) 0%, var(--clr-dark) 100%);

	.privacy-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 32px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.privacy-header {
		text-align: center;
		margin-bottom: 48px;

		.header-icon {
			width: 64px;
			height: 64px;
			background: var(--clr-purple-normal);
			border-radius: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto 24px;

			svg {
				font-size: 32px;
				color: white;
			}
		}

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

	.privacy-sections {
		display: grid;
		gap: 32px;
		margin-bottom: 48px;
	}

	.privacy-section {
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
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
		}
	}

	.contact-section {
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		text-align: center;

		h2 {
			color: white;
			font-size: 24px;
			margin-bottom: 16px;
			font-weight: 600;
		}

		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.6;

			a {
				color: var(--clr-purple-normal);
				text-decoration: none;
				transition: all 0.3s ease;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
