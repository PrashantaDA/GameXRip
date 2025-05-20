import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = ({ children, minWidth = 280, gap = 24, padding = "24px 0" }) => {
	return (
		<GridWrapper
			$minWidth={minWidth}
			$gap={gap}
			$padding={padding}
		>
			{children}
		</GridWrapper>
	);
};

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	minWidth: PropTypes.number,
	gap: PropTypes.number,
	padding: PropTypes.string,
};

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${(props) => props.$gap}px;
	padding: ${(props) => props.$padding};

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		padding: 20px 0;
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		gap: 16px;
	}
`;

export default Grid;
