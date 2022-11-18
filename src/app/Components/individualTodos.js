import React from 'react'
import './individualTodos.css'
import { compareAsc, format } from 'date-fns'


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
         <p>{format(new Date(todo.time),'p, MM/DD/YYYY')}</p>
    </div>
    </div>
    </div>
  )
}

export default IndividualTodos