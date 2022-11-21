import React,{useState} from 'react'
import './todoModel.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addTodo,updateTodo } from '../../Slices/todoSlice';
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast';

function Todomodel({openModel,setopenModel,update,todo}) { //distructure the props obtained from the Todomodel page
    const [title,setTitle] = useState('')
    const [status,setStatus] = useState('Incomplete')
    const dispatch = useDispatch()
   
    const formSubmit = (e) =>{
      
      e.preventDefault()
            if(title && status){
              if(update === 'update'){
                if(todo.title !== title || todo.status !== status){
                    dispatch(updateTodo(
                      ...todo,
                      title,
                      status
                    ))
                }

                
                toast.error('Input Field(s) Cannot Be Empty')
              }
              
              if(update === 'add'){
              dispatch(addTodo({
                id: uuid(),
                title,
                status,
                time : new Date().toLocaleString(),
              }))  
              toast.success('Todo Added Successfully')
              setopenModel(false)
          }
        }else{
        toast.error('Input Field(s) Cannot Be Empty')
      }
     
      // console.log(title,status)
    }

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
     <form className='form' onSubmit={(e)=>formSubmit(e)} //passing the submitted values to a function (formSubmit)
     >
        <h1>{update === 'update' ? 'UPDATE ' : 'ADD ' } TODO</h1>
        <label className='title'>Title
        <input type = "text" value = {title} onChange = {(e)=>setTitle(e.target.value)} className='title_input'/> 
        </label>
        <label className='sel_status'>Status
        <select className='status' value = {status} onChange = {(e)=>setStatus(e.target.value)}>
        <option value="complete">complete</option>
        <option value="Incomplete">Incomplete</option>
        </select> 
        </label>
        <button type = "submit" className='add'>{update === 'update' ? 'Update ' : 'Add' }</button>
        <button type = "button" onClick = {()=>setopenModel(false)} className='remove'>Cancle</button>
        
     </form>
    </div>
    </div>
    )}
    
</div>
  )
}

export default Todomodel