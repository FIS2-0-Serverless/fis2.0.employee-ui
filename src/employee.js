import React, { Component } from 'react'

import FaBackward from 'react-icons/lib/fa/backward'
import PersonalDetails from './personalDetails'
import Address from './address'
import BankAccount from './bankAccount'
import Contract from './contract'
import HealthInsurance from './healthInsurance'

class Employee extends Component {
  render() {
    const onClose = this.props.onClose
    const { name, id, healthInsurance, bankAccount } = this.props.employee

    return (
      <div>
        <button onClick={onClose}><FaBackward/></button>
        <h1>{name.first} {name.last} ({id})</h1>

        <div className="panel-group">
          <h2>Employee</h2>
          <PersonalDetails employee={this.props.employee}/>
          <Address {...this.props.employee.location} phone={this.props.employee.phone}/>
          <HealthInsurance {...healthInsurance}/>
          <BankAccount {...bankAccount}/>
        </div>

        <Contract employeeId={this.props.employee.id}/>

        <button onClick={onClose}><FaBackward/></button>
      </div>
    )
  }
}

export default Employee;