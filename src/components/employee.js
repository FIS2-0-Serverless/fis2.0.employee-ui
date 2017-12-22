import React from 'react'

import FaBackward from 'react-icons/lib/fa/backward'
import PersonalDetails from './personalDetails'
import Address from './address'
import BankAccount from './bankAccount'
import Contract from './contract'
import HealthInsurance from './healthInsurance'

const Employee = ({ onClose, employee, contract }) => {
  const { name, id, healthInsurance, bankAccount, location, phone } = employee

  const contractOutput = contract ? <Contract {...contract}/> : <div className="panel-group"><p className="bg-warning">No contract found!</p></div>

  return (
    <div>
      <button onClick={onClose}><FaBackward/></button>
      <h1>{name.first} {name.last} ({id})</h1>

      <div className="panel-group">
        <h2>Employee</h2>
        <PersonalDetails {...employee}/>
        <Address {...location} phone={phone}/>
        <HealthInsurance {...healthInsurance}/>
        <BankAccount {...bankAccount}/>
      </div>

      {contractOutput}

      <button onClick={onClose}><FaBackward/></button>
    </div>
  )
}

export default Employee;