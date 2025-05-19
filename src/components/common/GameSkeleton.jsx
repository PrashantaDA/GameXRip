import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`;

const GameSkeleton = ({ count = 9 }) => {
	return (
		<SkeletonContainer>
			{[...Array(count)].map((_, index) => (
				<SkeletonCard key={index}>
					<div className="image-skeleton" />
					<div className="content-skeleton">
						<div className="title-skeleton" />
						<div className="info-skeleton" />
						<div className="rating-skeleton" />
					</div>
				</SkeletonCard>
			))}
		</SkeletonContainer>
	);
};

const SkeletonContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 32px;
	padding: 0;
	width: 100%;

	@media screen and (max-width: 992px) {
		gap: 24px;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 20px;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		gap: 16px;
	}
`;

const SkeletonCard = styled.div`
	background: rgba(255, 255, 255, 0.03);
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.08);
	transition: transform 0.3s ease;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

	.image-skeleton {
		width: 100%;
		padding-top: 56.25%; /* 16:9 aspect ratio */
		background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
		background-size: 2000px 100%;
		animation: ${shimmer} 2s infinite linear;
	}

	.content-skeleton {
		padding: 20px;

		.title-skeleton {
			height: 24px;
			width: 80%;
			margin-bottom: 16px;
			background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
		}

		.info-skeleton {
			height: 16px;
			width: 60%;
			margin-bottom: 12px;
			background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
		}

		.rating-skeleton {
			height: 16px;
			width: 40%;
			background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
		}
	}
`;

export default GameSkeleton;
