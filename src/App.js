import React, { Component } from "react";
import "./App.css";
import Header from "./components/pageHeader";
import Employee from "./components/employeeCard";
import API from "./utils/api";
import Sort from "./components/sort";
import Search from "./components/search";

class App extends Component {
	state = {
		data: [],
		employees: [],
		sort: "",
		search: "",
	};

	// When this component mounts, get the employee data
	componentDidMount() {
		API.getEmployees()
			.then((res) => {
				const data = res.data.results.map((result) => {
					return {
						firstname: result.name.first,
						lastname: result.name.last,
						photo: result.picture.medium,
						phone: result.cell,
						email: result.email,
						location: result.location.state,
					};
				});
				this.setState({ employees: data, data: data });
			})
			.catch((err) => console.log(err));
	}

	// sort employee cards by user selected sort criteria
	handleSort = (event) => {
		const criteria = event.target.value;
		this.setState({ sort: criteria });
		this.sortBy(criteria);
	};

	sortBy = (criteria, employees = this.state.employees) => {
		console.log("criteria2: ", criteria);
		if (criteria === "first") {
			const sorted = employees.sort((a, b) => a.firstname.localeCompare(b.firstname));
			this.setState({ employees: sorted });
		} else if (criteria === "last") {
			const sorted = employees.sort((a, b) => a.lastname.localeCompare(b.lastname));
			this.setState({ employees: sorted });
		} else if (criteria === "location") {
			const sorted = employees.sort((a, b) => a.location.localeCompare(b.location));
			this.setState({ employees: sorted });
		}
		console.log("sorted state: ", employees);
	};

	// filter employees by search input
	searchBy = (event) => {
		const value = event.target.value;
		this.setState({ search: value });
		console.log("value: ", value);
		const filtered = this.state.data.filter(
			(employee) =>
				employee.firstname.toLowerCase().includes(value.toLowerCase()) ||
				employee.lastname.toLowerCase().includes(value.toLowerCase()) ||
				employee.phone.includes(value) ||
				employee.email.toLowerCase().includes(value.toLowerCase()) ||
				employee.location.toLowerCase().includes(value.toLowerCase())
		);
		console.log("filtered: ", filtered);
		this.sortBy(this.state.sort, filtered);
	};

	render() {
		return (
			<>
				<Header />
				<div className="container">
					<h1>Employee Directory</h1>
					<form className="form-inline d-flex justify-content-between my-3">
						<Sort search={this.state.sort} sortBy={this.handleSort} />
						<Search search={this.state.search} searchBy={this.searchBy} />
					</form>
					<div className="card-deck">
						{this.state.employees.map((employee, index) => (
							<Employee
								key={index}
								firstname={employee.firstname}
								lastname={employee.lastname}
								photo={employee.photo}
								phone={employee.phone}
								email={employee.email}
								location={employee.location}
							/>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default App;
