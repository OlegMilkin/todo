import React from 'react'
import RegistrationReduxForm from './RegistrationForm'

const Registration = (props) => {

  const submit = (values) => {
    props.registerThunk(values.email, values.password)
  }

  return (
    <>
      <RegistrationReduxForm onSubmit={submit} />
    </>
  )
}

export default Registration;