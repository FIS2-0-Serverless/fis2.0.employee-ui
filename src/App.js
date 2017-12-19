import React, { Component } from 'react';
import './App.css';

import Employees from './employees'
import Employee from './employee'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedEmployee: null
    }
    this.onEmployeeSelected = this.onEmployeeSelected.bind(this)
    this.onShowAllEmployees = this.onShowAllEmployees.bind(this)
  }

  onEmployeeSelected(employee) {
    this.setState({
      selectedEmployee: employee
    })
  }

  onShowAllEmployees() {
    this.setState({
      selectedEmployee: null
    })
  }

  render() {
    const { selectedEmployee } = this.state

    let output = ''
    if (selectedEmployee) {
      output = <Employee employee={selectedEmployee} onClose={this.onShowAllEmployees}></Employee>
    }
    else {
      output = <Employees onEmployeeSelected={this.onEmployeeSelected}/>
    }

    return (
      <div className="">
        { output }
      </div>
    );
  }
}

export default App;
