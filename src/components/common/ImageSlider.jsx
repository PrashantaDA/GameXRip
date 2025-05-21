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
					centerPadding: "70px",
					fade: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: "0px",
					slidesToShow: 1,
					fade: true,
					dots: false,
				},
			},
		],
	};

	return (
		<ImageSliderWrapper>
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
		background: linear-gradient(rgba(3, 3, 10, 0.99), rgba(7, 3, 20, 0.97));
		padding: 70px 7px;
	}

	.game-slider {
		.slider-item {
			height: 480px;
			padding: 60px;
			outline: 0;

			img {
				height: 360px;
				object-fit: fill;
				aspect-ratio: 16/9;
			}
		}

		.slick-list {
			padding-top: 36px !important;
			padding-bottom: 36px !important;
		}

		.slick-dots {
			bottom: -40px;
			li {
				height: 10px;
				width: 36px;
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
			transform: scale(1.2);
		}

		.slick-next {
			position: absolute;
			right: 16px !important;
			z-index: 5;
			transform: scale(1.2);
		}
	}
`;
