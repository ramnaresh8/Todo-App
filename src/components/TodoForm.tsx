import React, {useState} from "react";
import { TextField, Button } from '@mui/material'


interface TodoFormProps {
    addTodo: (todo: {
        id: number,
        title: string,
        completed: boolean
    }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [ newTodo, setNewTodo ] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!newTodo.trim()) return;
        addTodo({ id: Date.now(), title: newTodo, completed: false});
        setNewTodo('');
    }

    return (
        <div className="flex justify-end w-full">
            <form onSubmit={handleSubmit} className="flex w-full">
                <TextField 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new Todo"
                variant="outlined"
                style={{ marginRight: 16, width: 'calc(100% - 64px)' }}
                className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
                />
                <Button type="submit" 
                    variant="contained" 
                    className="bg-blue-500 w-[30%] text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                    >
                    Add Todo
                </Button>
            </form>
        </div>
    )
}

export default TodoForm;