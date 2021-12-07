import React from 'react'
import Login from '../Auth/Login/Login'
import Registration from '../Auth/Registration/Registration'
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const Auth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged)

  return (
    <>
      {
        isLogged
          ?
          <Redirect to="/today"/>
          :
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h2 className='mt-5'>Login</h2>
                <Login />
              </div>
              <div className="col-lg-6 col-sm-12">
                <h2 className='mt-5'>Registration</h2>
                <Registration />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Auth