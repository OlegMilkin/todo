import React from 'react'
import LoginReduxForm from './LoginForm'

const Login = (props) => {

  const submit = (values) => {
    props.loginThunk(values.email, values.password)
  }

  return (
    <>
      <LoginReduxForm onSubmit={submit} />
    </>
  )
}

export default Login;