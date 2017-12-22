import React from 'react'

const PositionRow = ({name, nameInContract, salaryLevel, validFrom, lastUpdate, updatedBy}) =>
  <tr>
    <td>{name}</td>
    <td>{nameInContract}</td>
    <td>{salaryLevel}</td>
    <td>{validFrom.toString()}</td>
    <td>{lastUpdate.toString()}</td>
    <td>{updatedBy}</td>
  </tr>

const Ranking = ({ranking = []}) =>
  <div className="panel panel-default panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">Ranking</h3>
    </div>
    <div className="panel-body">
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Position</th>
            <th>Position a.t. contract</th>
            <th>Salary level</th>
            <th>Valid from</th>
            <th>Last change</th>
            <th>Last change by</th>
          </tr>
        </thead>
        <tbody>
          {
            ranking.map((pos, key) => <PositionRow {...pos} key={key}/>)
          }
        </tbody>
      </table>
    </div>
  </div>

export default Ranking;