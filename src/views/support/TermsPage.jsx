import styled from "styled-components";
import { FaFileContract } from "react-icons/fa";
import { Breadcrumb } from "../../components/common";

const TermsPage = () => {
	const sections = [
		{
			title: "Acceptance of Terms",
			content:
				"By accessing and using GameXRip, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
		},
		{
			title: "Use License",
			content:
				"Permission is granted to temporarily access the materials (information or software) on GameXRip's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
		},
		{
			title: "User Conduct",
			content:
				"You agree to use GameXRip only for lawful purposes and in accordance with these Terms. You agree not to use the service to violate any laws, infringe upon others' rights, or engage in any harmful or disruptive behavior.",
		},
		{
			title: "Intellectual Property",
			content:
				"The content, organization, graphics, design, and other matters related to the site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication of any such content is prohibited without our express permission.",
		},
		{
			title: "Disclaimer",
			content:
				"The materials on GameXRip's website are provided on an 'as is' basis. GameXRip makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
		},
		{
			title: "Limitations",
			content:
				"In no event shall GameXRip or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GameXRip's website.",
		},
		{
			title: "Revisions and Errata",
			content:
				"The materials appearing on GameXRip's website could include technical, typographical, or photographic errors. GameXRip does not warrant that any of the materials on its website are accurate, complete, or current. GameXRip may make changes to the materials contained on its website at any time without notice.",
		},
		{
			title: "Governing Law",
			content:
				"These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
		},
	];

	return (
		<TermsPageWrapper>
			<div className="container">
				<Breadcrumb dataNameById="Terms of Service" />
				<div className="terms-content">
					<div className="terms-header">
						<div className="header-icon">
							<FaFileContract />
						</div>
						<h1>Terms of Service</h1>
						<p className="subtitle">Last Updated: {new Date().toLocaleDateString()}</p>
					</div>

					<div className="terms-sections">
						{sections.map((section, index) => (
							<div
								key={index}
								className="terms-section"
							>
								<h2>{section.title}</h2>
								<p>{section.content}</p>
							</div>
						))}
					</div>

					<div className="contact-section">
						<h2>Contact Us</h2>
						<p>
							If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@gamexrip.com">legal@gamexrip.com</a>
						</p>
					</div>
				</div>
			</div>
		</TermsPageWrapper>
	);
};

export default TermsPage;

const TermsPageWrapper = styled.div`
	padding: 65px 0;
	min-height: 100vh;
	background: linear-gradient(135deg, var(--clr-violet-darker) 0%, var(--clr-dark) 100%);

	.terms-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 32px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.terms-header {
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

	.terms-sections {
		display: grid;
		gap: 32px;
		margin-bottom: 48px;
	}

	.terms-section {
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
