import React from 'react'
import { useSelector } from 'react-redux'
import './todocontent.css'

function Todocontent() {
  const todoList = useSelector((state) => state.todo.todoList)
  return (
    <div className='todo_c'>
    Todocontent
    </div>
  )
}

export default Todocontent