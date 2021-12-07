import React from 'react'
import RegistrationReduxForm from './RegistrationForm'
import {registerThunk} from '../../../redux/auth-reducer'
import {useDispatch} from 'react-redux'

const Registration = () => {

  const dispatch = useDispatch()

  const submit = (values) => {
    dispatch(registerThunk(values.email, values.password))
  }

  return (
    <>
      <RegistrationReduxForm onSubmit={submit} />
    </>
  )
}

export default Registration