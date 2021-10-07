import React from 'react'
import {connect} from 'react-redux'
import Registration from './Registration'
import {registerThunk} from '../../redux/task-list-reducer'

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
    isLogged: state.taskList.isLogged
  }
}

export default connect(mapStateToProps,
  {
    registerThunk
  }
)(RegistrationContainer)