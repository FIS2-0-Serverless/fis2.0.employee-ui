import React, { Component } from 'react'

import FaBackward from 'react-icons/lib/fa/backward'
import PersonalDetails from './personalDetails'
import Address from './address'
import BankAccount from './bankAccount'
import ContractDetails from './contractDetails'
import HealthInsurance from './healthInsurance'
import Ranking from './ranking'
import OrganizationDetails from './organizationDetails'

class Employee extends Component {
  render() {
    const onClose = this.props.onClose
    const { name } = this.props.employee
    const contract = {
                      joinDate: new Date(),
                      exitDate: "",
                      contractDate: new Date(),
                      noticePeriod: "3 months",
                      ranking: [
                        {
                          name: "Magician",
                          nameInContract: "Magician Extraordinaire",
                          salaryLevel: 1,
                          validFrom: new Date(),
                          lastUpdate: new Date(),
                          updatedBy: "Bratislav Metulski"
                        },
                        {
                          name: "Apprentice",
                          nameInContract: "Magician",
                          salaryLevel: 1,
                          validFrom: new Date(),
                          lastUpdate: new Date(),
                          updatedBy: "Bratislav Metulski"
                        },
                        {
                          name: "Broom Master",
                          nameInContract: "Better Slave",
                          salaryLevel: 1,
                          validFrom: new Date(),
                          lastUpdate: new Date(),
                          updatedBy: "Bratislav Metulski"
                        }
                      ],
                      organizationName: "Sinalcor",
                      capacityType: "Magician",
                      location: "Bonn"
                    }

    const healthInsurance = { insuranceType: "Mandated", insuranceName: "Wizzzzard Health", socialSecurityNumber: "65 170839 J 003", lastMandatedHealthInsurance: "", parenthood: "no", disabled: "no" }
    const bankAccount = { iban: "NL04RABO0370786848", holderLastname: "", holderFirstname: "", bic: "COBADEFF"}

    return (
      <div>
        <button onClick={onClose}><FaBackward/></button>
        <h1>{name.first} {name.last}</h1>

        <div>
          <PersonalDetails employee={this.props.employee}/>
          <Address {...this.props.employee.location} phone={this.props.employee.phone}/>
          <HealthInsurance {...healthInsurance}/>
          <BankAccount {...bankAccount}/>
        </div>

        <div>
          <ContractDetails {...contract}/>
          <OrganizationDetails {...contract}/>
          <Ranking rankings={contract.ranking}/>
        </div>

        <button onClick={onClose}><FaBackward/></button>
      </div>
    )
  }
}

export default Employee;