import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";
import Router from "./Router";
import Header from "./components/header/styledHeader";

// const App = () => {
// 	const [currentUser, setCurrentUser] = React.useState(null);
// 	const [unsubscribeFromAuth, setUnsubscribeFromAuth] = React.useState(null);

// 	React.useEffect(() => {

//   }, []);
// };

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Header />
				<Router />
			</>
		);
	}
}
const mapDispathToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispathToProps)(App);
