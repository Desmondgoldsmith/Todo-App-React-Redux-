import React, { useState } from 'react'
import './todo.css'

function Todo() {
    const [todo,setTodo] = useState("")
  return (
    <div className='Todo'>
    <form className='form_cls'>
        <input className='input_cls' ></input>
        <button className='btn_cls'>Add Todo</button>
    </form>
    </div>
  )
}

export default Todo