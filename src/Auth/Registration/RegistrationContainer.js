import React from 'react'
import {connect} from 'react-redux'
import Registration from './Registration'
import { registerThunk } from '../../redux/auth-reducer'

function RegistrationContainer(props) {

  const { registerThunk } = props

  return (
    <Registration
      registerThunk={ registerThunk }
    />
  )
}

export default connect(null, {registerThunk})(RegistrationContainer)