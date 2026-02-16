import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import TodoList from "../Components/TodoList";
import {
  getTodos,
  deleteTodo,
  toggleTodoCompletion,
  exportTodos,
  importTodos,
} from "../utils/storage";

/**
 * Main ToDo page - list and manage all todos
 * Features: filtering by status, search, export/import (bonus)
 */
export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All"); // All, Active, Completed
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState("");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const loadedTodos = getTodos();
    setTodos(loadedTodos);
  }, []);

  // Filter and search todos
  const filteredTodos = todos.filter((todo) => {
    // Apply status filter
    if (filter === "Active" && todo.completed) return false;
    if (filter === "Completed" && !todo.completed) return false;

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      return (
        todo.title.toLowerCase().includes(searchLower) ||
        (todo.description &&
          todo.description.toLowerCase().includes(searchLower))
      );
    }

    return true;
  });

  const handleToggle = (id) => {
    const updatedTodos = toggleTodoCompletion(id);
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = deleteTodo(id);
    setTodos(updatedTodos);
    showNotification("Task deleted successfully");
  };

  const handleExport = () => {
    const jsonData = exportTodos();
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(jsonData),
    );
    element.setAttribute("download", "todos_export.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showNotification("Tasks exported successfully");
  };

  const handleImportClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const jsonString = event.target.result;
            const importedTodos = importTodos(jsonString);
            setTodos(importedTodos);
            showNotification(
              `Imported ${importedTodos.length} tasks successfully`,
            );
          } catch (error) {
            showNotification("Error importing tasks");
          }
        };
        reader.readAsText(file);
      }
    };
    fileInput.click();
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  // Calculate stats
  const totalTodos = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = totalTodos - completedCount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Notification */}
        {notification && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg animate-pulse">
            {notification}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-semibold">Total Tasks</p>
            <p className="text-3xl font-bold text-blue-600">{totalTodos}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">Completed</p>
            <p className="text-3xl font-bold text-green-600">
              {completedCount}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-600 text-sm font-semibold">Active</p>
            <p className="text-3xl font-bold text-yellow-600">{activeCount}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search tasks by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Filter */}
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="All">All Tasks</option>
                <option value="Active">Active Tasks</option>
                <option value="Completed">Completed Tasks</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4 flex-wrap">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium"
            >
              📥 Export Tasks
            </button>
            <button
              onClick={handleImportClick}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium"
            >
              📤 Import Tasks
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filter === "All" && "All Tasks"}
              {filter === "Active" && "Active Tasks"}
              {filter === "Completed" && "Completed Tasks"}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Showing {filteredTodos.length} of {totalTodos} tasks
            </p>
          </div>

          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
