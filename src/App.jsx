import React, { useState } from 'react'
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "あああ",
    "いいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ううう",
    "えええ"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {

  };
  return (
    <>
      <div className="add_todo_area">
        <input id="add-text" placeholder="TODOを入力" type="text" value={todoText} onChange={onChangeTodoText}></input>
        <button id="add-button" onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete_area content_area">
        <h2>未完了のTODO</h2>
        <ul id="inComplete_list">
          {inCompleteTodos.map((todo, index) => {
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