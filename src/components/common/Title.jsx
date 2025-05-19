import styled from "styled-components";
import PropTypes from "prop-types";

const Title = ({ titleName }) => {
	return (
		<TitleWrapper>
			<h3>
				{titleName.firstText} <span>{titleName.secondText}</span>
			</h3>
			<div className="line"></div>
		</TitleWrapper>
	);
};

export default Title;

Title.propTypes = {
	titleName: PropTypes.object,
};

const TitleWrapper = styled.div`
	padding: 12px 0;
	text-align: center;
	font-weight: 800;
	font-size: 32px;
	letter-spacing: 0.07em;
	color: var(--clr-white);
	margin-bottom: 40px;
	/* font-family: var(--font-family-poppins); */

	h3 {
		text-transform: uppercase;
		position: relative;

		span {
			color: var(--clr-red-normal);
		}
	}

	.line {
		margin-top: 16px;
		height: 4px;
		width: 160px;
		margin-right: auto;
		margin-left: auto;
		background: linear-gradient(90deg, rgba(157, 78, 221, 0.1), rgba(157, 78, 221, 0.8), rgba(157, 78, 221, 0.1));
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 0 20px rgba(157, 78, 221, 0.3);
		backdrop-filter: blur(4px);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
			animation: shine 3s infinite;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(90deg, rgba(157, 78, 221, 0.2), rgba(157, 78, 221, 0.4), rgba(157, 78, 221, 0.2));
			animation: pulse 2s infinite;
		}
	}

	@keyframes shine {
		0% {
			left: -100%;
		}
		20% {
			left: 100%;
		}
		100% {
			left: 100%;
		}
	}

	@keyframes pulse {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.5;
		}
	}
`;
