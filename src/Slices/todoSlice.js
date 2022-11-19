import { createSlice } from "@reduxjs/toolkit";

const getinitialTodo = () => {
    //getting todo values from local storage
    const localtodoList = window.localStorage.getItem('todoList')
    if(localtodoList){
        return JSON.parse(localtodoList)
    }
    window.localStorage.setItem('todoList',JSON.stringify([]))//create an empty array when todo is empty
    return []
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
        addTodo : (state, action) => {
            state.todoList.push(action.payload) //add new values to the todo list
            const todoList = window.localStorage.getItem('todoList')
            if(todoList){ // basically saying here that if todos are saved successfully we convert it to an array
                const todoListArray = JSON.parse(todoList)
                todoListArray.push({ // put the recent added values into the array
                    ...action.payload,
                })
            window.localStorage.setItem('todoList', JSON.stringify(todoListArray))
            }else{
                window.localStorage.setItem('todoList', JSON.stringify(...action.payload)) //set an array to store current todo when todoList isnt created in the local storage

            }
        },
     deleteTodo: (state,action) => {
        const todoList = window.localStorage.getItem('todoList');
        const todoListArray = JSON.parse(todoList)
        
     }
       
    }
    

})

export const { addTodo } = todoSlice.actions 
export default todoSlice.reducer