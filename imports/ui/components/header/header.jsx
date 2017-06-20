import React from "react";
import NewBox from "./new_box/new_box.js";
import AccountsWrapper from "../accounts/accounts_wrapper.js";

export default class Header extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button
								type="button"
								className="navbar-toggle collapsed"
								data-toggle="collapse"
								data-target="#bs-example-navbar-collapse-1"
								aria-expanded="false"
							>
								<span className="sr-only">
									Toggle navigation
								</span>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>
							<a className="navbar-brand" href="#">Boxes</a>
						</div>
						<div
							className="collapse navbar-collapse"
							id="bs-example-navbar-collapse-1"
						>
							<ul className="nav navbar-nav">
								<li className="active">
									<a href="/">Home</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<NewBox />
								</li>
								<li>
									<AccountsWrapper />
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
