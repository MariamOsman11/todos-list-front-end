import React, { useEffect, useState } from 'react'
import { commonGet, commonPost } from '../../shared/utilities/utilitites'

export default function TodoList() {

  const [todoText, setTodoText] = useState('')

  const [todoArray, setTodoArray] = useState([])

  // on page load call a server and render list


  const getAll = () => {
    commonGet('/todo')
      .then(response => {
        setTodoArray(response||[])
      })
  }

  // on add new item send data to the server
  const createTodo = () => {

    let todoObj = {
      status: 'todo',
      text: todoText
    }


    commonPost('/todo', todoObj)
      .then(response => {
        alert('Item Added.');
        getAll()
      })

  }

  // on checked any item, send request to remove item from db

  useEffect(getAll, []);

  return (
    <div>
      <br></br>
      <input value={todoText} onChange={e => setTodoText(e.target.value)}></input>
      <button onClick={createTodo}>Add Item</button>

      <br></br>
      <br></br>

      {
        todoArray.map(x => <p>{x.text} <b>{x.status}</b></p>)
      }

    </div>
  )
}
