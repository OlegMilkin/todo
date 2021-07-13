import React from 'react';
import {addNewTaskText, changeNewTaskTextAction} from "../store";


const NewTaskForm = (props) => {

  let inputTextField = React.createRef();

  const addNewTask = () => {
    props.dispatch(addNewTaskText())
  }

  const changeNewTaskText = () => {
    props.dispatch(changeNewTaskTextAction(inputTextField.current.value))
  }

  return (
    <>
      <div className="input-group mt-5">
        <input
          type="text"
          className="form-control"
          placeholder='Add new task'
          onChange={changeNewTaskText}
          value={props.newTaskText}
          ref={inputTextField}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addNewTask}
        >
          ADD
        </button>
      </div>
    </>
  )
}

export default NewTaskForm;
