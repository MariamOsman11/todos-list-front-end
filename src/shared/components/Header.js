import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h2>Your Todo List</h2>
            <Link to={'/todo-list'} >
                Todo List
            </Link>
            <hr></hr>
        </div>
    )
}
