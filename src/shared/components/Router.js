import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from '../../pages/TodoList/TodoList'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='todo-list' element={<TodoList />}></Route>
            </Routes>
        </div>
    )
}
