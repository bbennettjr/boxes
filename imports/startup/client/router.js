import {FlowRouter} from 'kadira:flow-router';

FlowRouter.route('/blog/:postId', {
	name: 'blogPost',
	action(params) {
		console.log('this is my blog post:', params.postId);
	}
})