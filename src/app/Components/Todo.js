import React, { useState } from 'react'
import './todo.css'

function Todo() {
    const [todo,setTodo] = useState("")

    const addTodos = () => {       
        <h1>Big Heads</h1>
}
  return (
    <div className='Todo'>
    <form className='form_cls'>
        <input className='input_cls' value = {todo} onChange = {(e)=>setTodo(e.target.value)}/>
        <button className='btn_cls' onClick={addTodos}>Add Todo</button>
    </form>
    </div>
  )
}

export default Todo