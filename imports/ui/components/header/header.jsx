import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

// Components
import NewBox from "./new_box/new_box.js";
import AccountsWrapper from "../accounts/accounts_wrapper.js";

export default (Header = () => {
	return (
		<Navbar defaultExpanded>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/home">Boxes</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="/newest">Newest</NavItem>
					<NavItem eventKey={2} href="/top">Top</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						<NewBox />
					</NavItem>
					<NavItem eventKey={2} href="#">
						<AccountsWrapper />
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
});
