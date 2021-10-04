import React, {useState} from 'react'
import {connect} from 'react-redux'
import {registerThunk} from '../../redux/task-list-reducer'


const Registration = (props) => {

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onClickRegisterHandler = (e) => {
   // props.registerThunk('kk@gamil.com', '123321')
  }

  return (
    <>
      <form>
        <div
          className="mb-3 mt-5">
          <label
            htmlFor="register-email"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="register-email"
            value={ email }
            onChange={ onChangeEmailHandler }
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
          <input
            type="password"
            className="form-control"
            id="register-password"
            value={ password }
            onChange={ onChangePasswordHandler }
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={ onClickRegisterHandler }
        >
          Register
        </button>
      </form>
    </>
  )
}

export default connect(null, registerThunk) (Registration)