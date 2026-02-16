import React from "react";
import { Link } from "react-router-dom";

/**
 * TodoItem component - displays individual todo item
 * @param {Object} todo - Todo object
 * @param {Function} onToggle - Callback to toggle completion
 * @param {Function} onDelete - Callback to delete todo
 */
export default function TodoItem({ todo, onToggle, onDelete }) {
  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getPriorityBg = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100";
      case "Medium":
        return "bg-yellow-100";
      case "Low":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div
      className={`flex items-start gap-4 p-4 border-l-4 rounded-lg transition-all ${
        todo.completed
          ? "bg-gray-50 border-gray-300"
          : "bg-white border-blue-500"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mt-1 w-5 h-5 cursor-pointer"
      />

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        <h3
          className={`text-lg font-semibold break-words ${
            todo.completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {todo.title}
        </h3>
        {todo.description && (
          <p
            className={`mt-1 text-sm break-words ${
              todo.completed ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {todo.description}
          </p>
        )}
        <div className="mt-2 flex gap-2 flex-wrap">
          <span
            className={`text-xs px-2 py-1 rounded font-semibold ${getPriorityBg(todo.priority)} ${getPriorityColor(
              todo.priority,
            )}`}
          >
            {todo.priority}
          </span>
          <span className="text-xs text-gray-500 py-1">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link
          to={`/edit/${todo.id}`}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm font-medium"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
