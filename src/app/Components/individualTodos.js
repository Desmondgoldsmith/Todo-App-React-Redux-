// import { format } from 'date-fns'
import React,{useState} from 'react'
import './individualTodos.css'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {deleteTodo} from '../../Slices/todoSlice';
import toast from 'react-hot-toast';

function IndividualTodos({todo,update,setUpdate,openModel,setopenModel}) {
  const dispatch = useDispatch()

  const deleteTodos = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  }

  const updateTodo = () => {
    console.log("this todo is updated")
  }
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
      {/* <p className='time'>{format(new Date(todo.time), 'p, yyyy-MM-dd')}</p> */}
     </div>
    </div>
     <div className = 'actions'>
        <div className = 'icons' 
        onClick={()=> deleteTodos()}
        onKeyDown = {()=> deleteTodos()}
        tabIndex = {0}
        role = "button"
        >
         <MdDelete/>
        </div>
        <div className = 'icons'
        onClick={()=> updateTodo()}
        onKeyDown = {()=>updateTodo()}
        tabIndex = {0}
        role = "button"
        >
        <MdModeEdit/>
        </div>
     </div>
    </div>

  )
}

export default IndividualTodos