import { createSlice } from "@reduxjs/toolkit";

const getinitialTodo = () => {
    //getting todo values from local storage
    const localtodoList = window.localStorage.getItem('todoList')
    if(localtodoList){
        return JSON.parse(localtodoList)
    }
    //basically what i'm doing here is that im getting the todos values from the local storage,
    //once i get the values, i parse them to JSON  fromat.
} 
const initialValue = {
    //getting the todoList values from the local storage
    //a function to get the todo values 
    todoList: getinitialTodo()
}