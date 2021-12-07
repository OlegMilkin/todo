import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from '../../redux/auth-reducer'
import './header.css'

const Header = () => {

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutThunk())
  }

  const isLogged = useSelector((state) => state.auth.isLogged)

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
              isLogged
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

export default Header