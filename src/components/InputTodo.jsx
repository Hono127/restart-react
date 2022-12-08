import React from 'react'

export const InputTodo = (props) => {
  const { onClick, onChange, todoText, disabled } = props;
  const button = {
    height: '50px',
    width: '150px',
    fontSize: '20px',
    marginLeft: '10px',
    borderRadius: '20px'
  }
  const addTodoArea = {
    backgroundColor: 'aqua',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    marginBottom: '60px'
  }

  const inputArea = {
    width: '50%',
    height: '50px',
    borderRadius: '20px'
  }

  return (
    <div className="add_todo_area" style={addTodoArea}>
      <input disabled={disabled} style={inputArea} id="add-text" placeholder="TODOを入力" type="text" value={todoText} onChange={onChange}></input>
      <button style={button} id="add-button" onClick={onClick}>追加</button>
    </div>
  )
}