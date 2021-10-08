import React from 'react'
import LoginReduxForm from './LoginForm'
import { Redirect } from 'react-router-dom'

const Login = (props) => {



  const submit = (values) => {
    props.loginThunk(values.email, values.password)
  }

  if (props.isLogged) {
    return <Redirect to="/" />
  }

  return (
    <>
      <LoginReduxForm onSubmit={submit} />
    </>
  )
}

export default Login;