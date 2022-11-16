import React from 'react'
import './todoModel.css'
import CloseIcon from '@mui/icons-material/Close';

function Todomodel() {
  return (
    <div className='model'>
    <div className='container'>
     <div className = 'close_button'>
       <CloseIcon />
     </div>
     <form>
        <h1>Add Todo</h1>
        <label/>
     </form>
    </div>
    </div>
  )
}

export default Todomodel