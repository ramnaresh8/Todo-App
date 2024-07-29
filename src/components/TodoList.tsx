import React from "react";
import TodoItem from "./TodoItem";
import { List } from '@mui/material'

interface TodoListProps {
    todos: {
        id: number,
        title: string,
        completed: boolean
    }[];
    toggleCompleted: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <List>
            {todos.map(todo => <TodoItem key={todo.id} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} todo={todo}/>)}
        </List>
    )
}

export default TodoList;