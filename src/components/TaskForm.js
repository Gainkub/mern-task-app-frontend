import React from 'react';

const TaskForm = ({createTask, name, handleInputChange, isEditting, updateTask}) => {
  return (
    <form className="task-form" onSubmit={isEditting ? updateTask : createTask}>
        <input type="text" placeholder='Add a Task'
        name="value" value={name}
        onChange={handleInputChange}/>
        <button type="submit">{isEditting ? "Edit" : "Add"}</button>
    </form>
  )
}

export default TaskForm