import React from "react";
import Container from "../components/container";
import Cart from "../components/cart";

// Basic cart page with a built in error section. The rest is handed out to the cart component so that there can be a class that has a state and functions.
export default () => (
	<Container>
		<h1>Cart!</h1>
		<div className="error" style={{ color : `red` }}></div>
		<Cart />
	</Container>
);