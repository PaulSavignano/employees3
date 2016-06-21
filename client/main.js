import React from 'react'
import ReactDOM from 'react-dom'

import EmployeeList from './components/employee_list'

const App = () => {
  return (
    <div>
      App
      <EmployeeList />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})
