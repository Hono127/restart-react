import React from 'react'

export const CompleteTodo = (props) => {
  const { todos, onClickReturn } = props;
  const completeArea = {
    backgroundColor: 'rgb(219, 230, 14)',
    padding: '60px',
    borderRadius: '20px'
  }

  const completeListItem = {
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px'
  }

  const button = {
    fontSize: '20px',
    height: '50px',
    width: '150px',
    marginLeft: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={completeArea}>
      <h2>完了したTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} style={completeListItem}>
              <p className="list_name">{todo}</p>
              <button style={button} onClick={() => onClickReturn(index)}>戻す</button>
            </li>
          )
        })}
      </ul>
    </div >
  )
};