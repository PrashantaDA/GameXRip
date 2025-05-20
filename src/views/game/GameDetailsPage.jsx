import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectSingleGame, selectSingleGameStatus } from "../../redux/store/gameSlice";
import { useEffect } from "react";
import { fetchAsyncGameDetails } from "../../redux/utils/gameUtils";
import { Breadcrumb, Preloader } from "../../components/common";
import { game_details_image } from "../../utils/images";
import { STATUS } from "../../utils/status";
import GameDetails from "../../components/game/GameDetails";

const GameDetailsPage = () => {
	const { gameId } = useParams();
	const dispatch = useDispatch();
	const singleGameData = useSelector(selectSingleGame);
	const singleGameStatus = useSelector(selectSingleGameStatus);

	useEffect(() => {
		dispatch(fetchAsyncGameDetails(gameId));
	}, [dispatch, gameId]);

	return (
		<GameDetailsPageWrapper>
			<div
				className="sc-details"
				style={{
					background: `linear-gradient(0deg,rgba(12, 12, 14, 0.79),rgba(17, 18, 18, 0.79)),url(${game_details_image}) center/cover no-repeat`,
				}}
			>
				<div className="container">
					<Breadcrumb dataNameById={singleGameStatus === STATUS.LOADING ? null : singleGameData?.name} />
					{singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData={singleGameData} />}
				</div>
			</div>
		</GameDetailsPageWrapper>
	);
};

export default GameDetailsPage;

const GameDetailsPageWrapper = styled.div`
	.sc-details {
		min-height: 100vh;
		padding-top: 65px;
		padding-bottom: 65px;
	}
`;
