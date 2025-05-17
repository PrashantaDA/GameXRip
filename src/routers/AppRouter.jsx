import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll } from "../views/index";
import BaseLayout from "../layouts/BaseLayout";
import { useEffect } from "react";

// ScrollToTop component to handle scrolling on route changes
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
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
						path="games"
						element={<ViewGameAll />}
					/>
					<Route
						path="games/:gameId"
						element={<ViewGameDetails />}
					/>
					<Route
						path="stores"
						element={<ViewStoreAll />}
					/>
					<Route
						path="stores/:storeId"
						element={<ViewStoreDetails />}
					/>
					<Route
						path="creators"
						element={<ViewCreatorAll />}
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
