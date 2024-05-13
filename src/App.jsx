import { useEffect } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import DisplayTodo from './components/displayTodo'
import { useSelector } from 'react-redux'
import { updateTodo,removeTodo } from './reduxStore/todo'

function App() {
  let todos=useSelector(state=>state.todos)
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
     <div className='p-3 bg-purple-800 rounded-2xl'>
       <TodoForm />
       { 
         todos.map(todo=>
          (
            <div key={todo.id}>
            <DisplayTodo todo={todo} />
            </div>
          )
         )
       }
      </div>

  )
    
}

export default App
