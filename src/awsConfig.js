import React from 'react';

const AwsConfig = ({ config }) => {
  console.dir(config)
  return (<div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">AWS Config</h3>
    </div>
    <div className="panel-body">
      <ul>
        <li><span className="">Region: </span><span>{config.region}</span></li>
        <li><span className="">IdentityPoolId: </span><span>{config.credentials.params.IdentityPoolId}</span></li>
      </ul>
    </div>
  </div>)}

export default AwsConfig;
