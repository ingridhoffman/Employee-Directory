import React from "react";
import "./style.css";

function Search(props) {
	return (
		<form>
			<input
				onChange={props.searchBy}
				value={props.value}
				name="search"
				type="text"
				className="form-control"
				placeholder="Search"
				id="search"
			/>
		</form>
	);
}

export default Search;
