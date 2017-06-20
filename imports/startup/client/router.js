import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// route components
import AppContainer from "../../ui/components/app/app_container.jsx";

export const renderRoutes = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Welcome} />
				<Route path="/home" component={Home} />
			</div>
		</Router>
	);
};

const Welcome = ({ match }) => {
	const url = `${match.url}home`;
	return (
		<div>
			<h1>Welcome</h1>
			<Link to={url}>Home</Link>
			<Route path={url} component={Home} />
		</div>
	);
};

const Home = ({ match }) => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};
