import React, { Component } from 'react'
import FormField from './formField'

class Address extends Component {
  render() {
    const { location, phone } = this.props.employee

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Address</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <FormField title="Street" value={location.street}/>
            <FormField title="Number" value={location.streetnumber}/>
            <FormField title="Postcode" value={location.postcode}/>
            <FormField title="City" value={location.city}/>
            <FormField title="Country" value="Germany"/>
            <FormField title="Phone (private)" value={phone}/>
          </form>
        </div>
      </div>)
  }

}

export default Address;