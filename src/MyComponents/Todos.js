import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.map((todo) => {
        return(
        <>
        <h2>this</h2>
        <TodoItem todos={todo}/>
        </>)
      })}
    </div>
  )
}
