import React from 'react'
import RegistrationReduxForm from './RegistrationForm'
import { Redirect } from 'react-router-dom'

const Registration = (props) => {

  const submit = (values) => {
    props.registerThunk(values.email, values.password)
  }

  if (props.isLogged) {
    return <Redirect to="/" />
  }

  return (
    <>
      <RegistrationReduxForm onSubmit={submit} />
    </>
  )
}

export default Registration;