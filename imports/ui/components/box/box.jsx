import React from 'react';

export class Box extends React.Component {
	removeBox(event) {
		event.preventDefault();
		Meteor.call('box.remove', this.props.boxId, (error, result) => {
			if (error) console.log(error.reason);
			if (result) console.log(result);
		});
	}
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5 className="panel-title">{this.props.boxId}</h5>
				</div>
				<div className="panel-body" style={{ color: this.props.color }}>
					My color is: {this.props.color}
					<a
						className="btn btn-default"
						href="#"
						role="button"
						onClick={this.removeBox.bind(this)}
					>
						<span
							className="glyphicon glyphicon-remove"
							aria-hidden="true"
						/>
					</a>
				</div>
				<div className="panel-body">
					<small>
						By: {this.props.email}, at
						{' '}
						{this.props.createdAt.toLocaleDateString()}
					</small>
				</div>
			</div>
		);
	}
}
