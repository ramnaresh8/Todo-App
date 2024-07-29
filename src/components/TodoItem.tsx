import React from "react";
import { ListItem, Checkbox, ListItemText, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteRounded';

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <ListItem
      className="flex bg-gray-200 p-2 rounded-lg mb-2"
      style={{ justifyContent: "space-between" }}
    >
      <div className="flex items-start">
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        <ListItemText className="my-5 mx-9"
          style={{
            textDecoration: todo.completed ? "line-through" : "none"
          }}
        >
          {todo.title}
        </ListItemText>
      </div>
      <div>
        <IconButton
            type="submit"
            onClick={() => deleteTodo(todo.id)}
            aria-label="delete"
            >
            <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default TodoItem;