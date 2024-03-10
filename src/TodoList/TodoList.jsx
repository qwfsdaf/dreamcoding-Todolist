import React, { useEffect, useState } from "react";
import TodoAdd from '../components/TodoAdd'
import Todo from "../components/Todo";
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
    const [todos, settodos] = useState(readTodosFromLocalStorage);
    const handleAdd = (todo) => {
        settodos([...todos, todo])
    }

    const deletehandle = (deleted) => { settodos(todos.filter((t) => t.id !== deleted.id)) }
    const updatehandle = (updated) => settodos(todos.map(t => t.id === updated.id ? updated : t))

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map((item) =>
                        <Todo key={item.id}
                            todo={item}
                            onUpdate={updatehandle}
                            onDelete={deletehandle}></Todo>
                    )
                }
            </ul>
            <TodoAdd onAdd={handleAdd} />
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if (filter === 'all') {
        return todos;

    }
    return todos.filter(todo => todo.status === filter)
}

function readTodosFromLocalStorage() {
    console.log('readTodosFromLocalStorage');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}