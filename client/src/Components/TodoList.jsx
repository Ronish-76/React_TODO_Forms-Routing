import React from "react";
import TodoItem from "./TodoItem";

/**
 * TodoList component - displays list of todos
 * @param {Array} todos - Array of todo objects
 * @param {Function} onToggle - Callback to toggle completion
 * @param {Function} onDelete - Callback to delete todo
 */
export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-lg mb-2">No tasks found</p>
        <p className="text-gray-400 text-sm">
          Try adjusting your filters or add a new task to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
