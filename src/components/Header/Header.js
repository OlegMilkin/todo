import React from "react"
import './header.css'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutThunk } from '../../redux/auth-reducer'

const Header = (props) => {

  const logoutHandler = () => {
    props.logoutThunk()
  }

  return (
    <nav className="header navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to='/today'
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
            {
              props.isLogged
              ?
                <button
                  className="btn"
                  onClick={ logoutHandler }
                >
                  Logout
                </button>
              :
                <NavLink
                  className="nav-link"
                  to='/auth'
                  activeClassName='active'
                >
                  Login/Registration
                </NavLink>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

let mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

export default connect(mapStateToProps, {logoutThunk})(Header)