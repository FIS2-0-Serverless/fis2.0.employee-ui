import React, { Component } from 'react';
import './App.css';

import Employees from './employees'
import Employee from './employee'
import AwsConfig from './awsConfig'

import AWS from 'aws-sdk'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedEmployee: null
    }
    this.onEmployeeSelected = this.onEmployeeSelected.bind(this)
    this.onShowAllEmployees = this.onShowAllEmployees.bind(this)

    AWS.config.region = 'eu-central-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-central-1:c2adc6e2-a1c7-4b69-8664-c9788f6a6247',
    });
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
        <AwsConfig config={AWS.config}/>
        { output }
      </div>
    );
  }
}

export default App;
