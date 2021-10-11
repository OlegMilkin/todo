import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { loginThunk } from '../../redux/auth-reducer'

function LoginContainer(props) {

  const { loginThunk } = props

  return (
    <Login
      loginThunk={ loginThunk }
    />
  )
}

export default connect(null, { loginThunk })(LoginContainer)