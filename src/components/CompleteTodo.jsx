import React from 'react'

export const CompleteTodo = () => {
  return (
    <div className="complete_area content_area2" >
      <h2>完了したTODO</h2>
      <ul className="complete_list">
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo} className="list_item">
              <p className="list_name">{todo}</p>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
};