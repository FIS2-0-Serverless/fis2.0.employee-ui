import React, { Component } from 'react'
import FormField from './formField'

const BankAccount = ({iban, holderLastname, holderFirstname, bic}) =>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Back Account</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <FormField title="IBAN" value={iban}/>
            <FormField title="BIC" value={bic}/>
            <FormField title="Accound holder firstname" value={holderFirstname}/>
            <FormField title="Accound holder lastname" value={holderLastname}/>
          </form>
        </div>
      </div>

export default BankAccount;