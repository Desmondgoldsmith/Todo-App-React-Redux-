import React from 'react'

function IndividualTodos({todo}) {
  return (
    <div className='todoItem'>
    <div className='todoDetails'>
        [] 
    <div className='text'>
     <p>{todo.title}</p>
    </div>
    </div>
    </div>
  )
}

export default IndividualTodos