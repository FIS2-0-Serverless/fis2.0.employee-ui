import React from 'react'

const FormField = (props) =>
  <div className="form-group">
    <label htmlFor="title" className="col-sm-2 control-label">{props.title}</label>
    <div className="col-sm-10">
      <input className="form-control" readOnly value={props.value}/>
    </div>
  </div>

export default FormField