import styled from "styled-components";
import { selectSingleStore, selectSingleStoreStatus } from "../../redux/store/storeSlice";
import { useEffect, useState } from "react";
import { fetchAsyncStoresDetails } from "../../redux/utils/storeUtils";
import { Breadcrumb, Preloader } from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { STATUS } from "../../utils/status";
import { StoreDetails } from "../../components/store";

const StoreDetailsPage = () => {
	const { storeId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const singleStoreData = useSelector(selectSingleStore);
	const singleStoreStatus = useSelector(selectSingleStoreStatus);
	const [storeName, setStoreName] = useState("");

	useEffect(() => {
		dispatch(fetchAsyncStoresDetails(storeId));
	}, [storeId]);

	useEffect(() => {
		if (singleStoreData?.name) {
			setStoreName(singleStoreData.name);
		}
	}, [singleStoreData]);

	// Handle error state
	useEffect(() => {
		if (singleStoreStatus === STATUS.FAILED) {
			navigate("/stores");
		}
	}, [singleStoreStatus, navigate]);

	return (
		<StoreDetailsPageWrapper>
			<div className="sc-details">
				<div className="container">
					<Breadcrumb dataNameById={singleStoreStatus === STATUS.LOADING ? "..." : storeName} />
					{singleStoreStatus === STATUS.LOADING ? <Preloader /> : singleStoreStatus === STATUS.SUCCEEDED && singleStoreData ? <StoreDetails storeData={singleStoreData} /> : null}
				</div>
			</div>
		</StoreDetailsPageWrapper>
	);
};

export default StoreDetailsPage;

const StoreDetailsPageWrapper = styled.div`
	background: var(--clr-violet-dark-active);

	.sc-details {
		min-height: 100vh;
		padding-top: 65px;
		padding-bottom: 65px;
	}
`;
