import { createSlice } from "@reduxjs/toolkit";

const getinitialTodo = () => {
    //getting todo values from local storage
    const localtodoList = window.localStorage.getItem('todoList')
    if(localtodoList){
        
    }
} 
const initialValue = {
    //getting the todoList values from the local storage
    //a function to get the todo values 
    todoList: getinitialTodo()
}