import React from 'react'
import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



function App() {
  const [ todos, setTodos ] = useState<{id: number; title: string; completed: boolean }[]>([])

  const addTodo = (todo: { id: number; title: string; completed: boolean}) => 
    setTodos([...todos, todo])

  const toggleCompleted = ( id: number ) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo)
    )
  }

  const deleteTodo = ( id: number ) => {
    setTodos(todos.filter((todo) => todo.id != id));
  }
  return (
    <>
      <div className='min-h-screen bg-slate-200 flex items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-xl'>
          <h1 className='text-2xl font-bold mb-6 text-center'>Todo List</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        </div>
      </div>
    </>
  )
}

export default App
