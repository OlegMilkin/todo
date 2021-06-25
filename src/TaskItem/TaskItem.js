import React from "react"

const TaskItem = (props) => {
  return (
    <label className="list-group-item">
      <input className="form-check-input me-1" type="checkbox" value=""/>
        {props.title}
    </label>
  )
}

export default TaskItem;