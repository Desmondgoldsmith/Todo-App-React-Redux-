import React from 'react'
import './todoModel.css'
import CloseIcon from '@mui/icons-material/Close';

function Todomodel({openModel,setopenModel}) { //distructure the props obtained from the Todomodel page
  return (
   <div>
   {/* what i'm basically saying here is that , if openModel is true then show the form */}
   {openModel && (
   <div className='model'>
    <div className='container'>
     <div className = 'close_button'
      onClick = {()=>setopenModel(false)} //onclicking the button i set openModel to false which hides the form
      onKeyDown = {()=>setopenModel(false)} //same happens here ... the keyDown event fires everytime incase onClick fails 
      tabIndex = {0} //allows focus on an element
      role = "button" // giving the div a button functionality
      >
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
        <button type = "submit" className='add'>Add Task</button>
        <button type = "button" className='remove'>Cancle</button>
        
     </form>
    </div>
    </div>
    )}
</div>
  )
}

export default Todomodel