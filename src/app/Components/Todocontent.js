import React from 'react'
import { useSelector } from 'react-redux'
import './todocontent.css'

function Todocontent() {
  const todoList = useSelector((state) => state.todo.todoList)
  //sorting the todos based on theit time
  const sortedTodo = [...todoList] //getting a copy of the todos array
  sortedTodo.sort((a,b) => new Date(b.time) - new Date(a.time))
  return (
    <div className='todo_c'>
    Todocontent
    </div>
  )
}

export default Todocontent