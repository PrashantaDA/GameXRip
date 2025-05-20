import { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Breadcrumb } from "../../components/common";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<ContactPageWrapper>
			<div className="container">
				<Breadcrumb dataNameById="Contact Us" />
				<div className="contact-content">
					<div className="contact-header">
						<h1>Contact Us</h1>
						<p className="subtitle">Get in touch with our team</p>
					</div>

					<div className="contact-grid">
						<div className="contact-info">
							<div className="info-card">
								<div className="info-icon">
									<FaEnvelope />
								</div>
								<h3>Email Us</h3>
								<p>support@gamexrip.com</p>
							</div>

							<div className="info-card">
								<div className="info-icon">
									<FaMapMarkerAlt />
								</div>
								<h3>Location</h3>
								<p>Virtual Office</p>
							</div>

							<div className="info-card">
								<div className="info-icon">
									<FaPhone />
								</div>
								<h3>Support Hours</h3>
								<p>24/7 Online Support</p>
							</div>
						</div>

						<div className="contact-form">
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="subject">Subject</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="5"
									></textarea>
								</div>

								<button type="submit">Send Message</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</ContactPageWrapper>
	);
};

export default ContactPage;

const ContactPageWrapper = styled.div`
	padding: 65px 0;
	min-height: 100vh;
	background: linear-gradient(135deg, var(--clr-violet-darker) 0%, var(--clr-dark) 100%);

	.contact-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 32px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 24px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	.contact-header {
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

	.contact-grid {
		display: grid;
		gap: 32px;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 2fr;
		}
	}

	.contact-info {
		display: grid;
		gap: 24px;
	}

	.info-card {
		background: rgba(255, 255, 255, 0.02);
		padding: 24px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		text-align: center;

		.info-icon {
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
		}
	}

	.contact-form {
		background: rgba(255, 255, 255, 0.02);
		padding: 32px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.05);

		form {
			display: grid;
			gap: 24px;
		}

		.form-group {
			display: flex;
			flex-direction: column;
			gap: 8px;

			label {
				color: white;
				font-size: 14px;
				font-weight: 500;
			}

			input,
			textarea {
				background: rgba(255, 255, 255, 0.05);
				border: 1px solid rgba(255, 255, 255, 0.1);
				border-radius: 8px;
				padding: 12px 16px;
				color: white;
				font-size: 16px;
				transition: all 0.3s ease;

				&:focus {
					outline: none;
					border-color: var(--clr-purple-normal);
					background: rgba(255, 255, 255, 0.08);
				}

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
				}
			}

			textarea {
				resize: vertical;
				min-height: 120px;
			}
		}

		button {
			background: var(--clr-purple-normal);
			color: white;
			border: none;
			padding: 16px 32px;
			border-radius: 8px;
			font-size: 16px;
			font-weight: 600;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				background: var(--clr-purple-normal);
				transform: translateY(-2px);
				box-shadow: 0 4px 12px rgba(120, 81, 169, 0.3);
			}
		}
	}
`;
