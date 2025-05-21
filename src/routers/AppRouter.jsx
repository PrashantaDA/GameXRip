import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
	Home,
	Error,
	ViewGameAll,
	ViewGameDetails,
	ViewStoreAll,
	ViewStoreDetails,
	ViewCreatorAll,
	AboutPage,
	ContactPage,
	FAQPage,
	PrivacyPolicyPage,
	TermsPage,
} from "../views/index";
import BaseLayout from "../layouts/BaseLayout";
import { useEffect } from "react";
import { ROUTES } from "../constants";

// ScrollToTop component to handle scrolling on route changes
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// Only scroll if we're not already at the top
		if (window.scrollY > 0) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}, [pathname]);

	return null;
};

const AppRouter = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<BaseLayout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path={ROUTES.GAMES}
						element={<ViewGameAll />}
					/>
					<Route
						path={ROUTES.GAME_DETAILS}
						element={<ViewGameDetails />}
					/>
					<Route
						path={ROUTES.STORES}
						element={<ViewStoreAll />}
					/>
					<Route
						path={ROUTES.STORE_DETAILS}
						element={<ViewStoreDetails />}
					/>
					<Route
						path={ROUTES.CREATORS}
						element={<ViewCreatorAll />}
					/>
					<Route
						path={ROUTES.ABOUT}
						element={<AboutPage />}
					/>
					<Route
						path={ROUTES.CONTACT}
						element={<ContactPage />}
					/>
					<Route
						path={ROUTES.FAQ}
						element={<FAQPage />}
					/>
					<Route
						path={ROUTES.PRIVACY}
						element={<PrivacyPolicyPage />}
					/>
					<Route
						path={ROUTES.TERMS}
						element={<TermsPage />}
					/>
					<Route
						path="*"
						element={<Error />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
