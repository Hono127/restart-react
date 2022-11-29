import React, { useState } from 'react'
import "./style.css";

export const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "あああ",
    "いいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ううう",
    "えええ"
  ]);
  return (
    <>
      <div className="add_todo_area">
        <input id="add-text" placeholder="TODOを入力" type="text"></input>
        <button id="add-button">追加</button>
      </div>

      <div className="incomplete_area content_area">
        <h2>未完了のTODO</h2>
        <ul id="inComplete_list">
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list_item">
                <p className="list_name">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="complete_area content_area2">
        <h2>完了したTODO</h2>
        <ul className="complete_list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list_item">
                <p className="list_name">{todo}</p>
                <button>戻す</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
};