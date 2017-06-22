// Atmosphere and NPM
import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";
import { Grid } from "react-bootstrap";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";

// Collections
import { Boxes } from "../../../api/boxes/boxes.js";

// UI components
import Header from "../header/header.jsx";
import PageList from "../page/page_list.jsx";

export const App = appProps => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Grid>
					<Switch>
						<Route
							exact
							path="/home"
							render={() => <Redirect to="/newest" />}
						/>
						<Route path="/newest" component={PageList} />
						<Route path="/top" component={PageList} />
					</Switch>
				</Grid>
			</div>
		</Router>
	);
};

App.propTypes = {
	boxes: PropTypes.array.isRequired
};

// prettier-ignore
const AppContainer = createContainer(({ ...rest }) => {
	const subscription = Meteor.subscribe("boxes");
	return {
		boxes: Boxes.find({}, { sort: { createdAt: -1 } }).fetch(),
		ready: subscription.ready()
	};
}, App);
