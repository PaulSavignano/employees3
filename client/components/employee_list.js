import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees'
import EmployeeDetail from './employee_detail'

const PER_PAGE = 10
let NEW_PAGE = PER_PAGE

const EmployeeList = (props) => {
  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee =>
          <EmployeeDetail employee={employee} key={employee._id} />
        )}
      </div>
      <button
        onClick={() => {
          NEW_PAGE = NEW_PAGE + 5
          Meteor.subscribe('employees', NEW_PAGE)}
        }
        className="btn btn-primary"
      >
      Load More...
      </button>
    </div>
  )
}

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE)
  return { employees: Employees.find({}).fetch() }
}, EmployeeList)
