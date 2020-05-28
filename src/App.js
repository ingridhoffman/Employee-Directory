import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Employee from "./components/employee";
import API from "./utils/api";

class App extends Component {
	state = {
		employees: [],
	};

	// When this component mounts, get the employee database
	componentDidMount() {
		API.getEmployees()
			.then((res) => this.setState({ employees: res.data.results }))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1>Employee Directory</h1>
					<div className="card-deck">
						{this.state.employees.map((employee, index) => (
							<Employee
								key={index}
								firstname={employee.name.first}
								lastname={employee.name.last}
								photo={employee.picture.medium}
								phone={employee.cell}
								email={employee.email}
								location={employee.location.state}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
