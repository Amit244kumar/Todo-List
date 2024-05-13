import React, {  useState } from "react";
import { removeTodo,updateTodo } from "../reduxStore/todo";
import { useDispatch} from "react-redux";

export default function DisplayTodo({todo}){
    const dispatch=useDispatch()
    const [toggleTodo,setToggleTodo]=useState(false)
    const [isComplete,setIsComplete]=useState(false)
  
    const [input,setInput]=useState(todo.text) 

    return (
        <div className={`p-2 mb-4 rounded-lg ${isComplete?"bg-green-600":"bg-white"} `}>
           <div className="flex flex-row">
                <div >
                    <input type="checkbox"
                    className="rounded-md w-4"
                    checked={isComplete}    
                    onClick={()=>setIsComplete(isComplete?false:true)} 
                    />

                    <input type="text" 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        readOnly={!toggleTodo}     
                        className={`focus:outline-none p-2  rounded-lg ${isComplete?"bg-green-600":"bg-white"} ${toggleTodo?"shadow":null}`}        
                    />
                    <button onClick={()=>{
                        if(toggleTodo===true && input!=="" )
                        {
                            
                            dispatch(updateTodo({id:todo.id,input}))
                        }
                        setToggleTodo(toggleTodo?false:true)}
                    }
                    className="rounded p-1 outline-non c-p"
                    >
                    {toggleTodo? "📁" : "✏️"}
                    </button>
                    <button 
                    className="text-sm p-1.5 ml-2"
                    onClick={()=>{
                            dispatch(removeTodo(todo.id))
                    }}
                    >❌</button>
                </div>
            </div> 
        </div>
    )
}

