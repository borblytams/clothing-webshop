import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignnUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// ez mit keres itt
const TopicDetail = () => {
	return (
		<div>
			return (
			<div>
				<Link to="/topics"></Link>
				<h1>HOME PAGE</h1>
			</div>
			)<h1>TOP DETAIL PAGE</h1>
		</div>
	);
};

const Router = () => {
	return (
		<Switch>
			<Route exact path="/shop" component={ShopPage} />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/signin" component={SignInAndSignnUp} />
			<Route
				exact
				path="/topics/:topicId"
				render={() =>
					this.props.currentUser ? <Redirect to="/" /> : SignInAndSignnUp
				}
			/>
		</Switch>
	);
};

export default Router;
