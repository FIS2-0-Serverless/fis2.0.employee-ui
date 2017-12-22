import React, { Component } from 'react';
import Employees from './components/employees'
import Employee from './components/employee'
import AwsConfig from './components/awsConfig'
import AWS from 'aws-sdk'
import Actions from './actions'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedEmployee: null,
      employees: [],
      loading: false,
      errorMsg: null
    }
    this.onEmployeeSelected = this.onEmployeeSelected.bind(this)
    this.onShowAllEmployees = this.onShowAllEmployees.bind(this)

    AWS.config.region = 'eu-central-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-central-1:c2adc6e2-a1c7-4b69-8664-c9788f6a6247',
    });
  }

  onEmployeeSelected(employee) {
    Actions.fetchContractForEmployee(employee)
        .then(state => this.setState({ ...this.state, ...state, selectedEmployee: employee }))
        .catch(e => console.warn(e))
  }

  onShowAllEmployees() {
    this.setState({
      ...this.state,
      selectedEmployee: null
    })
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true })
    Actions.fetchEmployees()
        .then(state => this.setState({ ...this.state, ...state, loading: false }))
        .catch(e => console.warn(e))
  }

  render() {
    const { selectedEmployee, employees, contract } = this.state

    let output = ''
    if (selectedEmployee) {
      output = <Employee employee={selectedEmployee} onClose={this.onShowAllEmployees} contract={contract}></Employee>
    }
    else {
      output = <Employees onEmployeeSelected={this.onEmployeeSelected} employees={employees}/>
    }

    return (
      <div className="">
        { output }
        <AwsConfig config={AWS.config}/>

        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
        <div>
          <small>You are using mock services <b>{process.env.REACT_APP_SERVICE === 'mock' ? 'yes' : 'no'}</b>.</small>
        </div>
      </div>
    );
  }
}

export default App;
