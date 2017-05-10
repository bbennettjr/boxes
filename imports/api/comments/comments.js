import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Comments = new Mongo.Collection('comments');

// Publications
if (Meteor.isServer) {
	Meteor.publish('comments', () => {
		return Comments.find();
	});
}

Meteor.methods(
	{
		// insert a comment
		// update a comment
		// remove a comment
	}
);
