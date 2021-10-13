import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const NewTaskForm = ({addTaskThunk}) => {

  let inputTextField = React.createRef();

  const [newTaskText, setNewTaskText] = useState('')
  const [endDate, setEndDate] = useState(new Date())

  const addNewTask = () => {
    if ( newTaskText === '') return

    addTaskThunk(inputTextField.current.value, endDate)
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
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="form-control"
          dateFormat="MM-dd-yyyy"
          minDate={new Date()}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addNewTask}
          disabled={newTaskText === ''}
        >
          ADD
        </button>
      </div>
    </>
  )
}

export default NewTaskForm;
