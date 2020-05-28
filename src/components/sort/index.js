import React from "react";
import "./style.css";

function Sort(props) {
	return (
		<select
			className="custom-select"
			id="sortCriteria"
			onChange={props.sortBy}
			defaultValue="Sort By"
			value={props.value}
			aria-label="Sort By">
			<option>Sort By</option>
			<option value="first">First Name</option>
			<option value="last">Last Name</option>
			<option value="location">Location</option>
		</select>
	);
}

export default Sort;
