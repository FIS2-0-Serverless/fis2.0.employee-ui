import fetch from 'isomorphic-fetch';


const dismissContract = (contractId) => {
  if (process.env.REACT_APP_SERVICE === 'mock') {
    return Promise.resolve({})
  }

  return fetch('https://17ndprt19g.execute-api.eu-central-1.amazonaws.com/Stage/contract/' + contractId + '/dismissal', { method: 'POST', body: '' })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            console.warn(e)
          })
}

const fetchContractForEmployee = (employee) => {
  if (process.env.REACT_APP_SERVICE === 'mock') {
    return Promise.resolve({
      loading: false,
      contract: require('./mock/mockcontracts.js')[0],
      errorMsg: null
    })
  }

  return fetch('https://17ndprt19g.execute-api.eu-central-1.amazonaws.com/Stage/employee/' + employee.id + "/contract")
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

const fetchEmployees = () => {
  if (process.env.REACT_APP_SERVICE === 'mock') {
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

export default {
  fetchEmployees,
  fetchContractForEmployee,
  dismissContract
}