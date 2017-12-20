import React, { Component } from 'react'
import FormField from './formField'

const HealthInsurance = ({insuranceType, insuranceName, socialSecurityNumber, lastMandatedHealthInsurance, parenthood, disabled}) =>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Health Insurance</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <FormField title="Insurance type" value={insuranceType}/>
            <FormField title="Insurance name" value={insuranceName}/>
            <FormField title="Parenthood" value={parenthood}/>
            <FormField title="Social security number" value={socialSecurityNumber}/>
            <FormField title="Last mandated health insurance" value={lastMandatedHealthInsurance}/>
            <FormField title="Disabled" value={disabled}/>
          </form>
        </div>
      </div>

export default HealthInsurance;