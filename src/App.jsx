import React, { useState } from 'react'
import { CompleteTodo } from './components/CompleteTodo';
import { InCompleteTodo } from './components/InCompleteTodo';
import { InputTodo } from './components/InputTodo';
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setInCompleteTodos] = useState([
  ]);
  const [completeTodos, setCompleteTodos] = useState([
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
    newTodos.splice(index, 1); // spliceは(何番目の,何個)の要素を削除するという意味
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1); // spliceは(何番目の,何個)の要素を削除するという意味
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    // 完了エリアから削除する
    const newCompleteTodos = [...completeTodos]; // 今完了エリアにいるタスクを取得
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInCompleteTodos);
  };
  return (
    <>

      <InputTodo
        todoText={todoText}
        onClick={onClickAdd}
        onChange={onChangeTodoText}
        disabled={inCompleteTodos.length >= 5}
      />

      {inCompleteTodos.length >= 5 && <p style={{ color: 'red' }}>追加できるTodoは5個までです</p>}
      <InCompleteTodo
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete} />

      <CompleteTodo
        todos={completeTodos}
        onClickReturn={onClickReturn} />

      {/* ==========================================完了エリア================================================ */}

    </>
  )
};