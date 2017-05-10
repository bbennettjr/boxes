import React from 'react';
import { Box } from '../box/box.jsx';

export class PageList extends React.Component {
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
			<div className="container">
				{this.renderBoxes()}
			</div>
		);
	}
}
