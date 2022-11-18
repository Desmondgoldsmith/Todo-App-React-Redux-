import React from 'react'
import { useSelector } from 'react-redux'
import IndividualTodos from './individualTodos'
import './todocontent.css'

function Todocontent() {
  const todoList = useSelector((state) => state.todo.todoList)
  //sorting the todos based on theit time
  const sortedTodo = [...todoList] //getting a copy of the todos array
  sortedTodo.sort((a,b) => new Date(b.time) - new Date(a.time))

  return (
    <div className='todo_c'>
    {sortedTodo && sortedTodo.length > 0 
    ? 
    sortedTodo.map((todo)=> <IndividualTodos todo = {todo}/>)
    :
    'NO TODO FOUND'
    }
    </div>
  )
}

export default Todocontent