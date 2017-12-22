import React from 'react'
import ContractDetails from './contractDetails'
import Ranking from './ranking'
import OrganizationDetails from './organizationDetails'
import Actions from '../actions'

const Details = (props) =>
  <div className="panel-group">
    <ContractDetails {...props}/>
    <OrganizationDetails {...props}/>
    <Ranking {...props}/>
  </div>


// TODO: continue here move up and add success message
const dismissContract = (e, contractId) => {
  Actions.dismissContract(contractId)
         .catch(e => console.log(e))
  e.preventDefault()
}

const Contract = (props) => {
  const id = props.id

  let state = <p className="bg-danger">Contract is dismissed!</p>
  if (!props.contractState || props.contractState !== 'dismissed') {
    state = <form>
              <div className="form-group"><button className="btn btn-warning" onClick={(e) => dismissContract(e, id)}>Dismiss contract</button></div>
            </form>
  }

  return (
  <div>
    <h2>Employment</h2>
    { state }
    <Details {...props} />
  </div>
  )
}


export default Contract;