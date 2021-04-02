import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext'

const TodoList = () => {

    const [todo, setTodo] = useState('');

    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    };

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    };

    return (
        <div style = {{ background: theme.background, color: theme.text }}>
            {
                todos.length ? (
                    todos.map((todo) => {
                        return <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className='item'>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo'>Add todo:</label>
                <input type ='text' id='todo' onChange={handleChange} />
                <input type ='submit' value='Add new todo' className='ui button primary' />
            </form>
            <button className='ui button primary' onClick={changeTheme}>change the theme</button>

        </div>
    )
};

export default TodoList;