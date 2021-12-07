import React from 'react'
import LoginReduxForm from './LoginForm'
import {loginThunk} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";

const Login = () => {

  const dispatch = useDispatch()

  const submit = (values) => {
    dispatch(loginThunk(values.email, values.password))
  }

  return (
    <>
      <LoginReduxForm onSubmit={submit} />
    </>
  )
}

export default Login;