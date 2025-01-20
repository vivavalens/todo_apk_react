import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./Todoitem";
import AddTodo from "./Addtodo";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.log("There was an error fetching the data", error);
      });
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <ul className="space-y-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;