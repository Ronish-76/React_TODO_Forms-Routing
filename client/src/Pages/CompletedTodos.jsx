import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import TodoList from "../Components/TodoList";
import { getTodos, deleteTodo, toggleTodoCompletion } from "../utils/storage";

/**
 * CompletedTodos page - display only completed tasks
 * Bonus feature to view finished tasks
 */
export default function CompletedTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const allTodos = getTodos();
    const completedTodos = allTodos.filter((todo) => todo.completed);
    setTodos(completedTodos);
  }, []);

  const handleToggle = (id) => {
    const updatedTodos = toggleTodoCompletion(id);
    const completedTodos = updatedTodos.filter((todo) => todo.completed);
    setTodos(completedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = deleteTodo(id);
    const completedTodos = updatedTodos.filter((todo) => todo.completed);
    setTodos(completedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Completed Tasks ({todos.length})
          </h2>
          <p className="text-gray-600">View your finished tasks below</p>
        </div>

        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
