import { format } from 'date-fns'
import React from 'react'
import './individualTodos.css'


function IndividualTodos({todo}) {
  return (
    <div className='todoItem'>
    <div className='todoDetails'>
        [] 
    <div className='text'>
     <p style={
         todo.status === 'Incomplete' 
         ?
         {color:'lightgray',textDecoration:'line-through'}
         :{color:'black',textDecoration:'none'}
         }>
         {todo.title}</p>
      <p className='time'>{todo.time}</p>
     </div>
    </div>
    </div>
  )
}

export default IndividualTodos