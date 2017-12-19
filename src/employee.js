import React, { Component } from 'react'

import FaBackward from 'react-icons/lib/fa/backward'
import PersonalDetails from './personalDetails'
import Address from './address'
import BankAccount from './bankAccount'
import ContractDetails from './contractDetails'
import HealthInsurance from './healthInsurance'
import Ranking from './ranking'


class Employee extends Component {
  render() {
    const onClose = this.props.onClose
    const { name } = this.props.employee

    return (
      <div>
        <button onClick={onClose}><FaBackward/></button>
        <h1>{name.first} {name.last}</h1>

        <div>
          <PersonalDetails employee={this.props.employee}/>
          <Address employee={this.props.employee}/>
          <HealthInsurance employee={this.props.employee}/>
          <BankAccount employee={this.props.employee}/>
        </div>

        <div>
          <ContractDetails employee={this.props.employee}/>
          <Ranking employee={this.props.employee}/>
        </div>

        <button onClick={onClose}><FaBackward/></button>
      </div>
    )
  }
}

export default Employee;