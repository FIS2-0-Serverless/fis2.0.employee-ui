import React from 'react'
import FormField from './formField'

const ContractDetails = ({joinDate, exitDate = "", contractDate, noticePeriod = ""}) =>
      <div className="panel panel-default panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Contract Details</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <FormField title="Join date" value={joinDate}/>
            <FormField title="Exit date" value={exitDate}/>
            <FormField title="Contract date" value={contractDate}/>
            <FormField title="Notice period" value={noticePeriod}/>
          </form>
        </div>
      </div>

export default ContractDetails;