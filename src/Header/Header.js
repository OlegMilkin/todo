import React from "react"
import './header.scss'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to='/'
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCqW1OuIKW2TyHKRrmjB7I2dy7aaFHktOSJoF2_fR6rBbtXZC8KryZgQWKxL8ResD8Bs&usqp=CAU"
            width="80"
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              to='/'
              activeClassName='active'
            >
              Tasks List
            </NavLink>
            <NavLink
              className="nav-link"
              to='/history'
              activeClassName='active'
            >
              History
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header