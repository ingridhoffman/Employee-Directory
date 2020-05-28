import React from "react";

function Search(props) {
	return (
		<input
			onChange={props.searchBy}
			value={props.value}
			name="search"
			type="text"
			className="form-control"
			placeholder="Search"
			id="search"
			aria-label="Search"
		/>
	);
}

export default Search;
