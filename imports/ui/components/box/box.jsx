import React from "react";
import { Panel, Button, Glyphicon } from "react-bootstrap";

export class Box extends React.Component {
	header() {
		return (
			<h5>
				{`Box created on ${this.props.createdAt.toLocaleDateString()}`}
				<div className="pull-right">
					<small>
						By: {this.props.email}
					</small>
				</div>
			</h5>
		);
	}
	content() {
		return (
			<div style={{ position: "relative" }}>
				<Button className="pull-left">
					<Glyphicon glyph="heart" />
				</Button>
				<div
					style={{
						backgroundColor: this.props.color,
						position: "absolute",
						minWidth: "80%",
						height: "34px",
						left: "10%",
						right: "10%",
						borderRadius: "5px"
					}}
				/>
				<Button
					className="pull-right"
					onClick={this.removeBox.bind(this)}
				>
					<Glyphicon glyph="remove" />
				</Button>
			</div>
		);
	}
	like() {}
	removeBox(event) {
		event.preventDefault();
		Meteor.call("box.remove", this.props.boxId, (error, result) => {
			if (error) console.log(error.reason);
			if (result) console.log(result);
		});
	}
	render() {
		return (
			<div>
				<Panel header={this.header()}>
					{this.content()}
				</Panel>
			</div>
		);
	}
}
