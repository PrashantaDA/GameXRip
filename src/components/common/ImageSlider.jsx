import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImages } from "../../utils/images";

const ImageSlider = () => {
	const settings = {
		className: "center",
		arrows: true,
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 700,
		autoplay: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: "72px",
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: false,
					centerPadding: "36px",
				},
			},
		],
	};

	return (
		<ImageSliderWrapper className="section">
			<div className="slider-background">
				<Slider
					{...settings}
					className="game-slider"
				>
					{sliderImages?.map((image, idx) => (
						<div
							className="slider-item"
							key={idx}
						>
							<img
								src={image}
								alt={image}
								className="slider-item-img"
							/>
						</div>
					))}
				</Slider>
			</div>
		</ImageSliderWrapper>
	);
};

export default ImageSlider;

const ImageSliderWrapper = styled.div`
	position: relative;
	padding: 0;
	overflow: hidden;

	.slider-background {
		position: relative;
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/PA_bg.jpg");
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		padding: 36px 0;
	}

	.game-slider {
		.slider-item {
			height: 400px;
			padding: 60px;
			outline: 0;

			img {
				height: 360px;
				object-fit: fill;
				aspect-ratio: 16/9;
			}
		}

		.slick-list {
			padding-top: 90px !important;
			padding-bottom: 90px !important;
		}

		.slick-dots {
			li {
				height: 10px;
				width: 60px;
				button {
					&::before {
						width: 100% !important;
						height: 100% !important;
						border: 2px solid var(--clr-red-normal);
						color: unset;
						transition: var(--transition-default);
					}
				}

				&.slick-active {
					background-color: var(--clr-red-normal);
				}
			}
		}

		.slick-center {
			transform: scale(1.5);
		}

		.slick-prev {
			position: absolute;
			left: 16px !important;
			z-index: 5;
			transform: scale(1.4);
		}

		.slick-next {
			position: absolute;
			right: 16px !important;
			z-index: 5;
			transform: scale(1.4);
		}
	}

	@media screen and (min-width: 992px) {
		.game-slider {
			.slider-item {
				padding: 30px;
			}
		}
	}
`;
