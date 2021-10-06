import React from 'react'
import Login from './Login/Login'
import RegistrationContainer from './Registration/RegistrationContainer'

const Auth = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h2 className='mt-5'>Login</h2>
          <Login />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2 className='mt-5'>Registration</h2>
          <RegistrationContainer />
        </div>
      </div>
    </div>
  )
}

export default Auth