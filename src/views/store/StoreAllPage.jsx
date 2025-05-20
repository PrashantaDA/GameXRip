import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectAllStores, selectAllStoresStatus } from "../../redux/store/storeSlice";
import { useEffect } from "react";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";
import { STATUS } from "../../utils/status";
import { Title, Preloader } from "../../components/common/index";
import { StoreList } from "../../components/store/index";
import steamBg from "../../assets/images/steam_bg.png";

const StoreAllPage = () => {
	const dispatch = useDispatch();
	const stores = useSelector(selectAllStores);
	const storesStatus = useSelector(selectAllStoresStatus);

	useEffect(() => {
		dispatch(fetchAsyncStores());
	}, [dispatch]);

	return (
		<StoreAllPageWrapper>
			<div className="sc-stores section">
				<div className="container">
					<Title
						titleName={{
							firstText: "All",
							secondText: "Stores",
						}}
					/>
					{storesStatus === STATUS.LOADING ? <Preloader /> : stores?.length > 0 ? <StoreList stores={stores} /> : "No Stores Found!!"}
				</div>
			</div>
		</StoreAllPageWrapper>
	);
};

export default StoreAllPage;

const StoreAllPageWrapper = styled.div`
	background: url(${steamBg}) center/cover no-repeat;
	background-attachment: fixed;
	position: relative;

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

	.sc-stores {
		min-height: 100vh;
		padding-top: 65px;
		position: relative;
		z-index: 1;
	}
`;
