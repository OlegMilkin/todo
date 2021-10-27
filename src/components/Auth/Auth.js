import React from 'react'
import {connect} from 'react-redux'
import LoginContainer from './Login/LoginContainer'
import RegistrationContainer from './Registration/RegistrationContainer'
import {Redirect} from 'react-router-dom'

class Auth extends React.Component {
  render() {
    return (
      <>
        {
          this.props.isLogged
            ?
            <Redirect to="/today"/>
            :
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <h2 className='mt-5'>Login</h2>
                  <LoginContainer/>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <h2 className='mt-5'>Registration</h2>
                  <RegistrationContainer/>
                </div>
              </div>
            </div>
        }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

export default connect(mapStateToProps)(Auth)