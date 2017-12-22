import React from 'react'
import ContractDetails from './contractDetails'
import Ranking from './ranking'
import OrganizationDetails from './organizationDetails'

const Details = (props) =>
  <div className="panel-group">
    <ContractDetails {...props}/>
    <OrganizationDetails {...props}/>
    <Ranking {...props}/>
  </div>

const Contract = (props) =>
  <div>
    <h2>Employment</h2>
    <Details {...props} />
  </div>

export default Contract;