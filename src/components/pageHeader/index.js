import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

function Header() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<img src={logo} alt="company logo" className="img-fluid" id="logo" />
			</div>
		</div>
	);
}

export default Header;
