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
     <form className='form'>
        <h1>Add Todo</h1>
        <label className='title'>Title
        <input type = "text" className='title_input'/> 
        </label>
        <label className='sel_status'>Status
        <select className='status'>
        <option value="complete">complete</option>
        <option value="Incomplete">Incomplete</option>
        </select> 
        </label>
        <button className='add'>Add Task</button>
        <button className='remove'>Cancle</button>
        
     </form>
    </div>
    </div>
  )
}

export default Todomodel