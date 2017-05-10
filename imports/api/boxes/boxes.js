import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Boxes = new Mongo.Collection('boxes');

// Publications
if (Meteor.isServer) {
	Meteor.publish('boxes', () => {
		return Boxes.find();
	});
}

Meteor.methods({
	// insert a box
	'box.insert'(color) {
		// validate against schema
		new SimpleSchema({
			color: { type: String },
		}).validate({ color });

		// check that a user is signed in
		let userId = Meteor.userId();
		if (!userId)
			throw new Meteor.Error(
				'Not authorized',
				'You must sign in to create a box'
			);

		// create the box obj
		let user = Meteor.user();
		let box = {
			userId: userId,
			email: user.emails[0].address,
			color: color,
			createdAt: new Date(),
		};

		// insert the box
		let boxId = Boxes.insert(box);

		return { _id: boxId };
	},
	// update a box
	'box.update.color'(boxId, color) {
		// validate
		new SimpleSchema({
			boxId: { type: String },
			color: { type: String },
		}).validate({ boxId, color });

		// does the box exist
		let box = Boxes.findOne(boxId);
		if (!box)
			throw new Meteor.Error('Does Not Exist', 'Box could not be found');

		// check that user exists and owns box
		let user = Meteor.user();
		if (box.userId !== user._id)
			throw new Meteor.Error(
				'Not Authorized',
				'You are not the owner of this box'
			);

		// update the color
		Boxes.update(boxId, { $set: { color: color } });
	},
	// remove a box
	'box.remove'(boxId) {
		// validate
		new SimpleSchema({
			boxId: { type: String },
		}).validate({ boxId });

		// does the box exist
		let box = Boxes.findOne(boxId);
		if (!box)
			throw new Meteor.Error('Does Not Exist', 'Box could not be found');

		// check that user exists and owns box
		let user = Meteor.user();
		if (box.userId !== user._id)
			throw new Meteor.Error(
				'Not Authorized',
				'You are not the owner of this box'
			);

		// remove the box
		Boxes.remove(boxId);
	},
});
