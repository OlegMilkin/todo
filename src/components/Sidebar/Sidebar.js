import React from 'react'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="list-group">
        <NavLink
          to='/today'
          activeClassName={'active'}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          Today
        </NavLink>
        <NavLink
          to='/next-7-days'
          activeClassName={'active'}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          Next 7 Days
        </NavLink>
        <NavLink
          to='/inbox'
          activeClassName={'active'}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          Inbox
        </NavLink>
    </div>
  )
}

export default Sidebar