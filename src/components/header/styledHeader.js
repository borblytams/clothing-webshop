import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option">SHOP</Link>
				<Link className="option">CONTACT</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;

export const StyledHeader = styled(Header)`
	.header {
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	.logo-container {
		height: 100%;
		width: 70px;
		padding: 25px;
	}

	.options {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.option {
		padding: 10px 15px;
		cursor: pointer;
	}
`;
