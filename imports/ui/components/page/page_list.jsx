import React from "react";
import { Meteor } from "meteor/meteor";

// UI
import { Box } from "../box/box.jsx";
import { Grid } from "react-bootstrap";

// Data
import { Boxes } from "../../../api/boxes/boxes.js";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

class PageList extends React.Component {
	renderBoxes() {
		let boxes = this.props.boxes;
		return boxes.map(box => {
			return (
				<Box
					key={box._id}
					boxId={box._id}
					email={box.email}
					color={box.color}
					createdAt={box.createdAt}
				/>
			);
		});
	}
	render() {
		return (
			<Grid>
				{this.renderBoxes()}
			</Grid>
		);
	}
}

PageList.propTypes = {
	boxes: PropTypes.array.isRequired
};

export default createContainer(({ match }) => {
	Meteor.subscribe("boxes", match);
	return { boxes: Boxes.find({}).fetch() };
}, PageList);
