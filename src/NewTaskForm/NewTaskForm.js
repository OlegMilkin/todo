import React, {useState} from 'react'

const NewTaskForm = ({addTaskThunk}) => {

  let inputTextField = React.createRef();

  let [newTaskText, setNewTaskText] = useState('')

  const addNewTask = () => {
    addTaskThunk(inputTextField.current.value)
    setNewTaskText('')
  }

  const changeNewTaskText = () => {
    setNewTaskText(inputTextField.current.value)
  }

  return (
    <>
      <div className="input-group mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          onChange={changeNewTaskText}
          value={newTaskText}
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
