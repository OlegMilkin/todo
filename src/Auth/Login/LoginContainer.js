import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import { loginThunk } from '../../redux/auth-reducer'

function LoginContainer(props) {

  const {loginThunk, isLogged} = props

  return (
    <Login
      loginThunk={loginThunk}
      isLogged={isLogged}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

export default connect(mapStateToProps,
  {
    loginThunk
  }
)(LoginContainer)