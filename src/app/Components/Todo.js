import React, { useState } from 'react'
import './todo.css'

function Todo() {
  return (
    <div className='Todo'>
    <h1>TODO LIST</h1>
    <div className = 'buttons'>
      <button>Click me</button>
      <select>
        <option value="all">all</option>
        <option value="Incomplete">Incomplete</option>
        <option selected value="Complete">Complete</option>
</select>
    </div>

   
    </div>
  )
}

export default Todo