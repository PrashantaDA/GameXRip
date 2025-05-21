import styled from "styled-components";
import PropTypes from "prop-types";
import StoreItem from "./StoreItem";

const StoreList = ({ stores, isHomePage = false }) => {
	// For homepage, show only top 4 stores
	const displayStores = isHomePage ? stores?.slice(0, 3) : stores;

	return (
		<StoreListWrapper>
			<div className="store-list d-grid">
				{displayStores?.map((item) => (
					<StoreItem
						key={item.id}
						storeItem={item}
					/>
				))}
			</div>
		</StoreListWrapper>
	);
};

export default StoreList;

StoreList.propTypes = {
	stores: PropTypes.array,
	isHomePage: PropTypes.bool,
};

const StoreListWrapper = styled.div`
	.store-list {
		display: grid;
		gap: 32px;
		padding: 40px 0;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			background: radial-gradient(circle at center, rgba(157, 78, 221, 0.1) 0%, transparent 70%);
			pointer-events: none;
			z-index: 0;
		}

		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (min-width: 1600px) {
			grid-template-columns: repeat(4, 1fr);
		}

		/* Add animation for items */
		> * {
			animation: fadeInUp 0.6s ease forwards;
			opacity: 0;
			transform: translateY(20px);

			@for $i from 1 through 12 {
				&:nth-child(#{$i}) {
					animation-delay: #{$i * 0.1}s;
				}
			}
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
