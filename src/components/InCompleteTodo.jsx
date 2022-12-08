import React from 'react'

export const InCompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete_area content_area">
      <h2>未完了のTODO</h2>
      <ul id="inComplete_list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list_item">
              <p className="list_name">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}