import React from 'react';

export default class NewBox extends React.Component {
	boxInsert(event) {
		event.preventDefault();
		let color = this.getRandomColor();
		Meteor.call('box.insert', color, (error, result) => {
			if (error) console.log(error.reason);
			if (result._id) console.log('Box _id: ' + result._id);
		});
	}
	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	render() {
		return <a href="#" onClick={this.boxInsert.bind(this)}>New Box</a>;
	}
}
