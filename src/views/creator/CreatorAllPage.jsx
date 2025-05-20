import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllCreators, selectAllCreatorsStatus, selectCreatorsNextPage, selectCreatorsPrevPage } from "../../redux/store/creatorSlice";
import { useEffect, useState } from "react";
import { fetchAsyncCreators } from "../../redux/utils/creatorUtils";
import { Pagination, Preloader, Title } from "../../components/common/index";
import { STATUS } from "../../utils/status";
import { CreatorList } from "../../components/creator/index";
import steamBg from "../../assets/images/steam_bg.png";

const CreatorAllPage = () => {
	const dispatch = useDispatch();
	const creators = useSelector(selectAllCreators);
	const creatorsStatus = useSelector(selectAllCreatorsStatus);
	const prevPage = useSelector(selectCreatorsPrevPage);
	const nextPage = useSelector(selectCreatorsNextPage);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(fetchAsyncCreators(page));
	}, [dispatch, page]);

	const pageHandler = (pageValue) => setPage(pageValue);

	return (
		<CreatorAllPageWrapper>
			<div className="container">
				<div className="creator-all-page">
					<Title
						titleName={{
							firstText: "Honorable",
							secondText: "Creators",
						}}
					/>
					{creatorsStatus === STATUS.LOADING ? (
						<Preloader />
					) : creators?.length > 0 ? (
						<>
							<CreatorList creators={creators} />
							<Pagination
								pageHandler={pageHandler}
								prevPage={prevPage}
								currentPage={page}
								nextPage={nextPage}
							/>
						</>
					) : (
						<div className="no-creators">
							<h3>No Developers Found</h3>
						</div>
					)}
				</div>
			</div>
		</CreatorAllPageWrapper>
	);
};

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
	background: url(${steamBg}) center/cover no-repeat;
	background-attachment: fixed;
	position: relative;
	min-height: 100vh;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
		backdrop-filter: blur(5px);
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.creator-all-page {
		padding: 40px 0;
	}

	.no-creators {
		text-align: center;
		color: rgba(255, 255, 255, 0.9);
		padding: 40px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		backdrop-filter: blur(10px);
		margin-top: 20px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.1);

		h3 {
			margin: 0;
			font-size: 24px;
			font-weight: 600;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		}
	}
`;
