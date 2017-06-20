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
				<Route path="/app" component={AppContainer} />
			</div>
		</Router>
	);
};

const Welcome = ({ match }) => {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to={`${match.url}home`}>Home</Link>
			<Link to={`${match.url}app`}>AppContainer</Link>
		</div>
	);
};

const Home = ({ match }) => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/">Welcome</Link>
			<Link to="/app">AppContainer</Link>
		</div>
	);
};
const Page = ({ match }) => {
	return (
		<div>
			<h1>Page</h1>
			<Link to="/">Welcome</Link>
			<Link to="/home">Home</Link>
		</div>
	);
};
