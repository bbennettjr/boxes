// Atmosphere and NPM
import React from "react";
import PropTypes from "prop-types";

// Collections
import { Boxes } from "../../../api/boxes/boxes.js";

// UI components
import Header from "../header/header.jsx";
import { PageList } from "../page/page_list.jsx";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.ready
					? <PageList boxes={this.props.boxes} />
					: <h1>LOADING</h1>}

			</div>
		);
	}
}

App.propTypes = {
	boxes: PropTypes.array.isRequired
};
