import React from "react";
import "./style.css";

function Employee(props) {
	return (
		<div className="card text-center mb-4">
			<img src={props.photo} className="rounded-circle thumb" alt={props.name} />
			<div className="card-body">
				<h3 className="card-title">
					{props.firstname} {props.lastname}
				</h3>
				<p className="card-text">{props.phone}</p>
				<p className="card-text">{props.email}</p>
			</div>
			<div className="card-footer text-muted">{props.location}</div>
		</div>
	);
}

export default Employee;
