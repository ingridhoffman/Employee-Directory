import React, { Component } from "react";
import "./App.css";
import Header from "./components/pageHeader";
import Employee from "./components/employeeCard";
import API from "./utils/api";
import Search from "./components/search";

class App extends Component {
	state = {
		employees: [],
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
				this.setState({ employees: data });
			})
			.catch((err) => console.log(err));
	}

	// filter employees by search input
	searchBy = (event) => {
		const value = event.target.value;
		this.setState({ search: value });

		const filtered = this.state.employees.filter(
			(employee) =>
				employee.firstname.toLowerCase().includes(value.toLowerCase()) ||
				employee.lastname.toLowerCase().includes(value.toLowerCase()) ||
				employee.phone.includes(value) ||
				employee.email.toLowerCase().includes(value.toLowerCase()) ||
				employee.location.toLowerCase().includes(value.toLowerCase())
		);
		this.setState({ employees: filtered });
	};

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1>Employee Directory</h1>
					<Search search={this.state.search} searchBy={this.searchBy} />
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
			</div>
		);
	}
}

export default App;
