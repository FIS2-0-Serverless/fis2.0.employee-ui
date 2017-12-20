import React from 'react'
import FormField from './formField'

const Address = ({street, streetnumber, postcode, city, country = "Germany", phone}) =>
      <div className="panel panel-default panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Address</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <FormField title="Street" value={street}/>
            <FormField title="Number" value={streetnumber}/>
            <FormField title="Postcode" value={postcode}/>
            <FormField title="City" value={city}/>
            <FormField title="Country" value={country}/>
            <FormField title="Phone (private)" value={phone}/>
          </form>
        </div>
      </div>

export default Address;