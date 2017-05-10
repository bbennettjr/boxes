// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// UI components
import App from './app.jsx';

// Collections
import { Boxes } from '../../../api/boxes/boxes.js';

// prettier-ignore
export default AppContainer = createContainer(() => {
	Meteor.subscribe('boxes');
	return {boxes: Boxes.find({}).fetch()};
}, App);
