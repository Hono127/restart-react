import React from 'react'

export const InCompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  const incompleteArea = {
    backgroundColor: 'rgb(100, 237, 109)',
    padding: '60px',
    borderRadius: '20px',
    marginBottom: '60px'
  }

  const inComoleteAreaList = {
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px'
  }

  const button = {
    height: '50px',
    width: '150px',
    fontSize: '20px',
    marginLeft: '10px',
    borderRadius: '20px'
  }

  return (
    <div className="incomplete_area" style={incompleteArea}>
      <h2>未完了のTODO</h2>
      <ul id="inComplete_list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list_item" style={inComoleteAreaList}>
              <p className="list_name">{todo}</p>
              <button style={button} onClick={() => onClickComplete(index)}>完了</button>
              <button style={button} onClick={() => onClickDelete(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}