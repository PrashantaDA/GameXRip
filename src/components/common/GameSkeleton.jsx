import styled, { keyframes } from "styled-components";
import Grid from "./Grid";

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
		<Grid>
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
		</Grid>
	);
};

const SkeletonCard = styled.div`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

	.image-skeleton {
		width: 100%;
		height: 200px;
		background: linear-gradient(90deg, #2a2a3a 0%, #3a3a4a 50%, #2a2a3a 100%);
		background-size: 2000px 100%;
		animation: ${shimmer} 2s infinite linear;
	}

	.content-skeleton {
		padding: 16px;

		.title-skeleton {
			height: 24px;
			width: 80%;
			background: linear-gradient(90deg, #2a2a3a 0%, #3a3a4a 50%, #2a2a3a 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
			margin-bottom: 12px;
		}

		.info-skeleton {
			height: 16px;
			width: 60%;
			background: linear-gradient(90deg, #2a2a3a 0%, #3a3a4a 50%, #2a2a3a 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
			margin-bottom: 8px;
		}

		.rating-skeleton {
			height: 16px;
			width: 40%;
			background: linear-gradient(90deg, #2a2a3a 0%, #3a3a4a 50%, #2a2a3a 100%);
			background-size: 2000px 100%;
			animation: ${shimmer} 2s infinite linear;
			border-radius: 4px;
		}
	}
`;

export default GameSkeleton;
