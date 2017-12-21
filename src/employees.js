import React, { Component } from 'react';

import fetch from 'isomorphic-fetch';
import FaSearch from 'react-icons/lib/fa/search';

class Employees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loading: false,
      errorMsg: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch('https://e3ixwum5ff.execute-api.eu-central-1.amazonaws.com/Stage/employee')
      .then(response => {
        if (response.status !== 200 && response.status !== 404) {
          throw new Error("Bad response from server: " + response.status);
        }
        return response.status === 200 ? response.json() : null
      })
      .then(json => json.users)
      .then(employees => employees.sort( (a,b) => a.name.last > b.name.last))
      // .then(e => { throw new Error("FOO") })
      .then(employees => this.setState({
        loading: false,
        employees: employees
      }))
      .catch(e => {
         this.setState({ employees: [], loading: false, errorMsg: 'Cannot load employees! ' + (e.message || "Check logs for details") })
      })
  }


  render() {
    const { employees, loading, errorMsg } = this.state
    const onEmployeeSelected = this.props.onEmployeeSelected

    if (loading) {
      return (<p className="bg-info">Loading...</p>)
    }

    if (errorMsg) {
      return (<p className="bg-danger">{errorMsg}</p>)
    }

    if (employees.length === 0) {
      return (<p className="bg-warning">No employees found!</p>)
    }

    return (
      <table className="table table-hover table-condensed">
        <thead>
          <tr>
            <th>Lastname</th>
            <th>Firstname</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{
          employees.map((employee, i) =>
            <tr key={i}>
              <td>{employee.name.last}</td>
              <td>{employee.name.first}</td>
              <td><button title="Show employee details" className="btn btn-default" onClick={() => onEmployeeSelected(employee)}><FaSearch/></button></td>
            </tr>
          )
        }
        </tbody>
      </table>
    )
  }
}

export default Employees;