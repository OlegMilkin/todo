import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, renderField } from '../../helpers/validators'

let RegistrationForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="mb-3 mt-5">
        <label
          htmlFor="register-email"
          className="form-label"
        >
          Email address
        </label>
        <Field
          placeholder={"Email address"}
          component={ renderField }
          name={"email"}
          validate={[required]}
          className="form-control"
          id="register-email"
          type="text"
        />
      </div>
      <div
        className="mb-3">
        <label
          htmlFor="register-password"
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
          id="register-password"
          type="password"
        />
        { error &&
        <div style={{ border: "1px solid red" }}>
          { error }
        </div>
        }
      </div>
      <button
        className="btn btn-success"
      >
        Register
      </button>
    </form>
  )
}

const RegistrationReduxForm = reduxForm({
  form: 'registration'
})(RegistrationForm)

export default RegistrationReduxForm