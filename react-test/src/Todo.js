import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    //刷新可以保存勾选
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}
