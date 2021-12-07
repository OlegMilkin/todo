import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email, renderField } from '../../../helpers/validators'

let LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="mb-3 mt-5">
        { error &&
        <div className="alert alert-danger">
          { error }
        </div>
        }
        <label
          htmlFor="login-email"
          className="form-label"
        >
          Email address
        </label>
        <Field
          placeholder={"Email address"}
          component={ renderField }
          name={"email"}
          validate={[required, email]}
          className="form-control"
          id="login-email"
          type="text"
        />
      </div>
      <div
        className="mb-3">
        <label
          htmlFor="login-password"
          className="form-label"
        >
          Password
        </label>
        <Field
          placeholder={"Password"}
          component={ renderField }
          name={"password"}
          validate={[required]}
          className="form-control"
          id="login-password"
          type="password"
        />
      </div>
      <button
        className="btn btn-success"
      >
        Login
      </button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm