import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

function Header(props) {
	return (
		<div className="jumbotron jumbotron-fluid pb-2">
			<div className="container">
				<img src={logo} alt="company logo" className="img-fluid" id="logo" />
				<h1 className="text-right">Employee Directory</h1>
			</div>
		</div>
	);
}

export default Header;
