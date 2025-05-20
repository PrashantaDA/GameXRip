import { Outlet } from "react-router-dom";
import { Navbar, Footer, BackToTop } from "../components/common/index";

const BaseLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<BackToTop />
			<Footer />
		</>
	);
};

export default BaseLayout;
