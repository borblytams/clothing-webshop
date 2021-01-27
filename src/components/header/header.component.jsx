import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

// HOC component
import { connect } from "react-redux";

//
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

// state is the top level root reducer
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
