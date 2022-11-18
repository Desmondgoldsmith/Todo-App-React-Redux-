import React from 'react'
import './individualTodos.css'

function IndividualTodos({todo}) {
  return (
    <div className='todoItem'>
    <div className='todoDetails'>
        [] 
    <div className='text'>
     <p className = {todo.item === 'complete' ? 'distinct' : ''}>{todo.title}</p>
    </div>
    </div>
    </div>
  )
}

export default IndividualTodos