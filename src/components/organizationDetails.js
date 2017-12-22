import React from 'react'
import FormField from './formField'

const OrganizationDetails = ({organizationName, capacityType, location}) =>
  <div className="panel panel-default panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">Misc. Details</h3>
    </div>
    <div className="panel-body">
      <form className="form-horizontal">
        <FormField title="Organization" value={organizationName}/>
        <FormField title="Capacity type" value={capacityType}/>
        <FormField title="Location" value={location}/>
      </form>
    </div>
  </div>

export default OrganizationDetails