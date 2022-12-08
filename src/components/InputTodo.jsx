import React from 'react'

export const InputTodo = (props) => {
  const { onClick, onChange, todoText } = props;
  return (
    <div className="add_todo_area">
      <input id="add-text" placeholder="TODOを入力" type="text" value={todoText} onChange={onChange}></input>
      <button id="add-button" onClick={onClick}>追加</button>
    </div>
  )
}