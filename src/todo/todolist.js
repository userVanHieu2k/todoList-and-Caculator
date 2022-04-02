import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() => {
        const store = JSON.parse(localStorage.getItem('jobs'))
        return store ?? []
    })

    const handleSubmit = () => {
        setTodos(prev => {
            const newTodos = [...prev, todo]
            localStorage.setItem('jobs', JSON.stringify(newTodos))
            return newTodos
        })
        setTodo('')
    }
    const handleRemove = (id) => {
        const newTodo = todos.filter((todo, index) => index !== id)
        setTodos(newTodo)
        localStorage.setItem('jobs', JSON.stringify(newTodo))
    }

    return (
        <div>
            <input value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {todos.map((todo, index) => (

                    <li key={index}>{todo} <button onClick={() => handleRemove(index)}>Delete</button></li>

                ))}
            </ul>
        </div>
    );
};

export default Todo;