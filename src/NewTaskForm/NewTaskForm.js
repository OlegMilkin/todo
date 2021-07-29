import React from 'react';

const NewTaskForm = (props) => {

  let inputTextField = React.createRef();

  const addNewTask = () => {
    props.addText()
    props.updateText('')
  }

  const changeNewTaskText = () => {
    props.updateText(inputTextField.current.value)
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
