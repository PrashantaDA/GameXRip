import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu3Fill } from "react-icons/ri";
import { BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { SiKick } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from "../../redux/store/sidebarSlice";

const NAV_ITEMS = [
	{ path: "/", label: "Home" },
	{ path: "/games", label: "Games" },
	{ path: "/creators", label: "Creators" },
	{ path: "/stores", label: "Stores" },
];

const SOCIAL_LINKS = [
	{ icon: BsSteam, path: "/", className: "steam" },
	{ icon: BsTwitch, path: "/", className: "twitch" },
	{ icon: SiKick, path: "/", className: "kick" },
	{ icon: BsYoutube, path: "/", className: "youtube" },
];

const NavigationItems = () => (
	<ul className="navbar-nav">
		{NAV_ITEMS.map(({ path, label }) => (
			<li
				key={path}
				className="nav-item"
			>
				<Link
					to={path}
					className="nav-link"
				>
					{label}
				</Link>
			</li>
		))}
	</ul>
);

const SocialLinks = () => (
	<ul className="connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap">
		<li className="text-uppercase fw-7 w-100 connect-text mb-2">Connect</li>
		{SOCIAL_LINKS.map(({ icon: Icon, path, className }) => (
			<li
				key={className}
				className="connect-item"
			>
				<Link
					to={path}
					className={`connect-link ${className}`}
				>
					{Icon && <Icon size={className === "youtube" ? 23 : 20} />}
				</Link>
			</li>
		))}
	</ul>
);

const Navbar = () => {
	const dispatch = useDispatch();
	const sidebarStatus = useSelector(selectSidebarStatus);

	return (
		<NavbarWrapper className="d-flex align-items-center">
			<div className="container w-100">
				<div className="navbar-content">
					<div className="brand-and-toggler d-flex align-items-center justify-content-between">
						<Link
							to="/"
							className="navbar-brand text-white text-uppercase no-wrap"
						>
							Game<span className="logo-x">X</span>Rip
						</Link>
						<button
							type="button"
							className="navbar-show-btn text-white"
							onClick={() => {
								dispatch(setSidebarOn());
							}}
						>
							<RiMenu3Fill size={27} />
						</button>
					</div>
					<div className={`navbar-collapse ${sidebarStatus ? "show" : ""}`}>
						<button
							type="button"
							className="navbar-hide-btn"
							onClick={() => dispatch(setSidebarOff())}
						>
							<MdClose size={27} />
						</button>
						<NavigationItems />
						<SocialLinks />
					</div>
				</div>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;

const NavbarWrapper = styled.div`
	min-height: 70px;
	background: linear-gradient(180deg, #000 0%, #090927 50%, #000 100%);

	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
	position: sticky;
	top: 0;
	z-index: 1000;
	border-bottom: 1px solid rgba(255, 255, 255, 0.05);

	.navbar-brand {
		font-weight: 700;
		font-size: 24px;
		position: relative;
		transition: all 0.3s ease;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		font-family: "Stalinist One", sans-serif;

		span {
			color: #b91919;
			position: relative;
			text-shadow: 0 0 10px rgba(185, 25, 25, 0.5);
			font-size: 32px;

			&::after {
				content: "";
				position: absolute;
				bottom: -2px;
				left: 0;
				width: 100%;
				height: 2px;
				background: #b91919;
				transform: scaleX(0);
				transition: transform 0.3s ease;
				box-shadow: 0 0 8px rgba(185, 25, 25, 0.5);
			}
		}

		&:hover {
			transform: translateY(-1px);

			span::after {
				transform: scaleX(1);
			}
		}
	}

	.nav-item {
		padding: 10px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 3px;
			height: 100%;
			background: linear-gradient(to bottom, #b91919, #ff3333);
			transform: scaleY(0);
			transition: transform 0.3s ease;
		}

		&:hover::before {
			transform: scaleY(1);
		}
	}

	.nav-link {
		text-transform: uppercase;
		font-weight: 500;
		letter-spacing: 2px;
		transition: all 0.3s ease;
		color: #fff;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		padding: 12px 20px;
		display: block;
		position: relative;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 4px;
		margin: 0 10px;

		&:hover {
			color: #fff;
			text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
			background: rgba(255, 255, 255, 0.08);
			transform: translateX(5px);
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 0;
			height: 2px;
			background: linear-gradient(to right, #b91919, #ff3333);
			transition: all 0.3s ease;
			transform: translateX(-50%);
			box-shadow: 0 0 8px rgba(185, 25, 25, 0.5);
		}

		&:hover::after {
			width: 70%;
		}
	}

	.connect-text {
		letter-spacing: 2px;
		text-decoration: underline 2px;
		color: #fff;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	.connect-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 2px;
		margin-left: 2px;
	}

	.connect-link {
		padding: 6px 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		color: #fff;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(4px);
		border-radius: 6px;

		&:hover {
			transform: translateY(-2px) scale(1.05);
		}

		&.steam:hover {
			color: #194c64;
			background: rgba(25, 76, 100, 0.2);
		}
		&.twitch:hover {
			color: #9147ff;
			background: rgba(145, 71, 255, 0.2);
		}
		&.kick:hover {
			color: #53fc18;
			background: rgba(83, 252, 24, 0.2);
		}
		&.youtube:hover {
			color: #ff0000;
			background: rgba(255, 0, 0, 0.2);
		}
	}

	.navbar-collapse {
		position: fixed;
		right: 0;
		top: 0;
		width: 280px;
		height: 100%;
		background: linear-gradient(180deg, #0a0a0a 0%, #0a0a2e 50%, #0a0a0a 100%);
		box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
		padding: 60px 20px 16px;
		text-align: center;
		transform: translateX(100%);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 999;
		backdrop-filter: blur(10px);

		&.show {
			transform: translateX(0);
		}
	}

	.navbar-hide-btn {
		position: absolute;
		top: 20px;
		right: 20px;
		transition: all 0.3s ease;
		color: #fff;
		background: rgba(255, 255, 255, 0.05);
		padding: 8px;
		border-radius: 6px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

		&:hover {
			transform: scale(1.1);
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	.navbar-show-btn {
		transition: all 0.3s ease;
		color: #fff;
		background: rgba(255, 255, 255, 0.05);
		padding: 8px;
		border-radius: 6px;
		backdrop-filter: blur(4px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

		&:hover {
			transform: scale(1.1);
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	@media screen and (min-width: 992px) {
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);

		.navbar-show-btn {
			display: none;
		}

		.navbar-collapse {
			transform: translateX(0);
			position: relative;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 100%;
			background: transparent;
			box-shadow: none;
		}

		.navbar-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.nav-item {
			margin-left: 8px;
			border: none;
			overflow: visible;

			&::before {
				display: none;
			}
		}

		.navbar-nav {
			display: flex;
			margin-right: 32px;
		}

		.navbar-hide-btn {
			display: none;
		}

		.nav-link {
			padding: 8px 16px;
			background: transparent;
			margin: 0;

			&:hover {
				transform: translateY(-1px);
			}
		}

		.connect-list {
			display: flex;
			margin-top: 0;
			color: #fff;
			margin-left: 32px;

			.connect-text {
				width: auto;
				margin-bottom: 0;
				margin-right: 24px;
				display: none;
				text-decoration: none;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		.nav-link {
			padding: 8px 20px;
		}

		.connect-list {
			margin-left: 48px;

			.connect-text {
				display: inline-block;
			}
		}
	}
`;
