import React from 'react'
import {connect} from 'react-redux'
import Registration from './Registration'
import { registerThunk } from '../../redux/auth-reducer'

function RegistrationContainer(props) {

  const {registerThunk, isLogged} = props

  return (
    <Registration
      registerThunk={registerThunk}
      isLogged={isLogged}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

export default connect(mapStateToProps,
  {
    registerThunk
  }
)(RegistrationContainer)