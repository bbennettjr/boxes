import React from "react";

export class Box extends React.Component {
	renderHeart() {
		return (
			<a
				className="btn pull-left"
				href="#"
				role="button"
				style={{ position: "relative", top: "-15px" }}
				onClick={""}
			>
				<span
					className="glyphicon glyphicon-heart"
					aria-hidden="true"
				/>
			</a>
		);
	}
	renderX() {
		return (
			<a
				className="btn pull-right"
				href="#"
				role="button"
				style={{ position: "relative", top: "-15px" }}
				onClick={this.removeBox.bind(this)}
			>
				<span
					className="glyphicon glyphicon-remove"
					aria-hidden="true"
				/>
			</a>
		);
	}
	removeBox(event) {
		event.preventDefault();
		Meteor.call("box.remove", this.props.boxId, (error, result) => {
			if (error) console.log(error.reason);
			if (result) console.log(result);
		});
	}
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h5>
						{`Box created on ${this.props.createdAt.toLocaleDateString()}`}
						<div className="pull-right">
							<small>
								By: {this.props.email}
							</small>
						</div>
					</h5>
				</div>
				<div
					className="panel-body"
					style={{
						backgroundColor: this.props.color,
						width: "100%",
						height: "25px"
					}}
				>
					{this.renderHeart()}{this.renderX()}
				</div>
			</div>
		);
	}
}
