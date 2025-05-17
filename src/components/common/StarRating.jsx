import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, idx) => {
		const val = idx + 0.5;
		return <li key={idx}>{rating >= idx + 1 ? <BsStarFill /> : rating >= val ? <BsStarHalf /> : <BsStar />}</li>;
	});
	return <StarRatingWrapper className="rating d-flex align-items-start">{stars}</StarRatingWrapper>;
};

export default StarRating;

StarRating.propTypes = {
	rating: PropTypes.number,
};

const StarRatingWrapper = styled.ul`
	position: absolute;
	right: 20px;
	bottom: 20px;
	z-index: 2;
	background: rgba(108, 92, 231, 0.15);
	padding: 4px 8px;
	border-radius: 20px;
	backdrop-filter: blur(4px);

	li {
		padding: 0 1px;
		font-size: 16px;
		color: #fff;

		svg {
			opacity: 0.9;
		}
	}
`;
