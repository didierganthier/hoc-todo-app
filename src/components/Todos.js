import { useState } from "react"

const Todos = () => {
    const [todos] = useState([
        { id: 1, text: 'Read Bible' },
        { id: 2, text: 'Pray'},
        { id: 3, text: 'Worship God' }
    ])

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos