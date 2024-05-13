import React from "react";
import { addTodo } from "../reduxStore/todo";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TodoForm(){
    const dispatch=useDispatch()
    const [input,setInput]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
         dispatch(addTodo(input))
         setInput('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col  w-full p-5" >
               <input type="text" 
                className=" w-full  border p-2  rounded-lg mb-3"
                value={input}
                placeholder="enter todo"
                onChange={(e)=>{setInput(e.target.value)}} 
               />
               <input type="submit"
               className="w-full rounded-lg h-10 bg-orange-600 border-none hover:cursor-pointer" 
               />
            </div>
        </form>
    )
}

export default TodoForm