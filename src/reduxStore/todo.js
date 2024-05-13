import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo:(state,action)=>{

            state.todos=state.todos.filter((todo)=> todo.id !== action.payload) 
            
        }
        ,
        updateTodo:(state,action)=>{
            for (let index = 0; index < state.todos.length; index++) {
                if(state.todos[index].id===action.payload.id)
                {
                    state.todos[index].text=action.payload.input
                    break
                }
            } 
            localStorage.setItem("todos",JSON.stringify(state.todos))
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer;

const storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos) {
  initialState.todos = storedTodos;
}
