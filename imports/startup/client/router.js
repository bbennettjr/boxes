import React from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

// route components
import AppContainer from "../../ui/components/app/app_container.jsx";

const browserHistory = createBrowserHistory();

export const renderRoutes = () =>
	<Router history={browserHistory}>
		<div>
			<Route path="/test" component={AppContainer} />
		</div>
	</Router>;
