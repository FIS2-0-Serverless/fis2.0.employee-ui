import React from 'react'


import FormField from './formField'

const PersonalDetails = ({ name, location, dob, nat }) =>
  <div className="panel panel-default panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">Personal details</h3>
    </div>
    <div className="panel-body">
      <form className="form-horizontal">
        <FormField title="Title" value={name.title}/>
        <FormField title="Given name(s)" value={name.first}/>
        <FormField title="Last name" value={name.last}/>
        <FormField title="Date of birth" value={dob}/>
        <FormField title="Place of birth" value={location.city}/>
        <FormField title="Country of birth" value="Germany"/>
        <FormField title="Nationality" value={nat}/>
      </form>
    </div>
  </div>

export default PersonalDetails;