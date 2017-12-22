import React, { Component } from 'react';
import Employees from './components/employees'
import Employee from './components/employee'
import AwsConfig from './components/awsConfig'
import fetch from 'isomorphic-fetch';
import AWS from 'aws-sdk'

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
    this.setState({
      ...this.state,
      selectedEmployee: employee
    })

    this.fetchContractForEmployee(employee)
        .then(state => this.setState({ ...this.state, ...state }))
        .catch(e => console.warn(e))
  }

  onShowAllEmployees() {
    this.setState({
      ...this.state,
      selectedEmployee: null
    })
  }

  fetchContractForEmployee(employee) {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({
        loading: false,
        contract: require('./mock/mockcontracts.js')[0],
        errorMsg: null
      })
    }

    fetch('https://17ndprt19g.execute-api.eu-central-1.amazonaws.com/Stage/employee/' + this.state.selectedEmployee.id + "/contract")
      .then(response => {
        if (response.status !== 200 && response.status !== 404) {
          throw new Error("Bad response from server: " + response.status);
        }
        return response.status === 200 ? response.json() : null
      })
      .then(contracts => {
        return ({
            loading: false,
            errorMsg: null,
            contract: contracts.length > 0 ? contracts[0] : null
        })
      })
      .catch(e => {
         return ({ contract: null, loading: false, errorMsg: 'Cannot load contract! ' + (e.message || "Check logs for details") })
      })
  }

  fetchEmployees() {
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve({
        loading: false,
        employees: require('./mock/mockemployees').users
      })
    }

    return fetch('https://e3ixwum5ff.execute-api.eu-central-1.amazonaws.com/Stage/employee')
            .then(response => {
              if (response.status !== 200 && response.status !== 404) {
                throw new Error("Bad response from server: " + response.status);
              }
              return response.status === 200 ? response.json() : null
            })
            .then(json => json.users)
            .then(employees => employees.sort( (a,b) => a.name.last > b.name.last))
            .then(employees => ({
              loading: false,
              employees: employees
            }))
            .catch(e => ({ employees: [], loading: false, errorMsg: 'Cannot load employees! ' + (e.message || "Check logs for details") }))
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true })
    this.fetchEmployees()
        .then(state => this.setState({ ...this.state, ...state }))
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
      </div>
    );
  }
}

export default App;
