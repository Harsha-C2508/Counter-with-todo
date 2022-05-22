import React from 'react'
import { useState } from 'react'
import "../component/todos.css"

const TodoItem = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <div key={todo.id}>
        <input type="radio" value={""} 
        checked={isCompleted} 
        onChange={(e)=>{setIsCompleted(e.target.checked)}} 
         />
        {todo.value}
        <button className='delebut' onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem