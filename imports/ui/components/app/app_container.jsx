// Atmosphere and NPM
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

// UI components
import App from "./app.jsx";

// Collections
import { Boxes } from "../../../api/boxes/boxes.js";

// prettier-ignore
export default AppContainer = createContainer(({...rest}) => {
	const sub = Meteor.subscribe('boxes');
	return {boxes: Boxes.find({}, {sort: {createdAt: -1}}).fetch(), ready:sub.ready()};
}, App);
