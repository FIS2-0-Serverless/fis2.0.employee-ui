import React, { Component } from 'react'
import ContractDetails from './contractDetails'
import Ranking from './ranking'
import OrganizationDetails from './organizationDetails'
import fetch from 'isomorphic-fetch';


const Details = ({contract, contractLoading, errorMsg}) => {
  if (contractLoading) {
    return (<p className="bg-info">Loading...</p>)
  }
  else if (contract) {
    return (
      <div className="panel-group">
        <ContractDetails {...contract}/>
        <OrganizationDetails {...contract}/>
        <Ranking rankings={contract.ranking}/>
      </div>)
  }
  else if (errorMsg) {
    return (<p className="bg-danger">{errorMsg}</p>)
  }
  else {
    return (<p className="bg-warning">No contract found!</p>)
  }
}

class Contract extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contractLoading: false,
      contract: null,
      errorMsg: null
    }
  }

  componentDidMount() {
    this.setState({ contractLoading: true })

    fetch('https://e3ixwum5ff.execute-api.eu-central-1.amazonaws.com/Stage/employee/' + this.props.employeeId + "/contract")
      .then(response => {
        if (response.status !== 200 && response.status !== 404) {
          throw new Error("Bad response from server: " + response.status);
        }
        return response.status === 200 ? response.json() : null
      })
      .then(contract => this.setState({
            contractLoading: false,
            errorMsg: null,
            contract
        }))
      .catch(e => {
         this.setState({ contract: null, contractLoading: false, errorMsg: 'Cannot load contract! ' + (e.message || "Check logs for details") })
      })
  }

  render() {
    return (
      <div>
        <h2>Employment</h2>
        <Details {...this.state} />
      </div>
    )
  }
}

export default Contract;