import React from 'react'

export const TodoItem = ({todos}) => {
  return (
    <div>
      {/* Todo Works */}
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className="btn btn-danger btn-sm">Delete</button>
    </div>

  )
}
