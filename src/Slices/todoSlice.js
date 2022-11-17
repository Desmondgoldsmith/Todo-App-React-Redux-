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
    //saving the todos values we obtained from the getinitialTodo function and save it to the todoList variable
    todoList: getinitialTodo()
}


export const todoSlice = createSlice({
    name : 'todo',
    initialState : initialValue,
    reducers : {
        addTodo : (state, action) => {}
    }

})