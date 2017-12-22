import React from 'react';

import FaSearch from 'react-icons/lib/fa/search';

const Employees = ({ employees, loading, errorMsg, onEmployeeSelected }) => {
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

export default Employees;