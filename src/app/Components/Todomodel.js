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
        <label className='title'>Title
        <input type = "text" /> 
        </label>
        <label className='sel_status'>Status
        <input type = "text" /> 
        </label>
     </form>
    </div>
    </div>
  )
}

export default Todomodel