import React, { useState } from 'react'
import './todo.css'
import Todomodel from './Todomodel'

function Todo() {
  return (
    <div className='Todo'>
    <h1>TODO LIST</h1>
    <div className = 'buttons'>
      <button>Add Task</button>
      <select>
        <option value="all">all</option>
        <option value="Incomplete">Incomplete</option>
        <option selected value="Complete">Complete</option>
</select>
    </div>

       <div className='todoModel'>
        <Todomodel />
       </div>
   
    </div>
  )
}

export default Todo