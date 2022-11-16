import React, { useState } from 'react'
import './todo.css'
import Todomodel from './Todomodel'

function Todo() {
  // state to store the status of the {Todomodel} to command it to open or close
  const [openModel,setopenModel] = useState(true)

  return (
    <div className='Todo'>
    <h1>TODO LIST</h1>
    <div className = 'buttons'>
      <button>Add Task</button>
      <select className='select_todo'>
        <option value="all">all</option>
        <option value="Incomplete">Incomplete</option>
        <option selected value="Complete">Complete</option>
      </select>
  </div>
        <Todomodel openModel = {openModel} setopenModel = {setopenModel} /> {/* making the props available in the Todomodel page */} 
    </div>
  )
}

export default Todo