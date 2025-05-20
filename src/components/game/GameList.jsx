import styled from "styled-components";
import GameItem from "./GameItem";
import PropTypes from "prop-types";
import Grid from "../common/Grid";

const GameList = ({ games, sliceValue = games.length }) => {
	// If no slice value is provided all the games are fetched from API
	return (
		<GameListWrapper>
			<Grid>
				{games?.slice(0, sliceValue).map((item) => (
					<GameItem
						key={item.id}
						gameItem={item}
					/>
				))}
			</Grid>
		</GameListWrapper>
	);
};

GameList.propTypes = {
	games: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			background_image: PropTypes.string,
			rating: PropTypes.number,
			ratings_count: PropTypes.number,
			released: PropTypes.string,
		})
	).isRequired,
	sliceValue: PropTypes.number,
};

const GameListWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
`;

export default GameList;
