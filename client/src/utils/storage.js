// localStorage utility functions for todo persistence

const STORAGE_KEY = "courseManagement_todos";

/**
 * Get all todos from localStorage
 * @returns {Array} Array of todo objects
 */
export const getTodos = () => {
  try {
    const todos = localStorage.getItem(STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error reading todos from localStorage:", error);
    return [];
  }
};

/**
 * Save todos to localStorage
 * @param {Array} todos - Array of todo objects to save
 */
export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};

/**
 * Add a new todo
 * @param {Object} todo - Todo object with title and description
 * @returns {Array} Updated todos array
 */
export const addTodo = (todo) => {
  const todos = getTodos();
  const newTodo = {
    id: Date.now(),
    title: todo.title,
    description: todo.description || "",
    completed: false,
    priority: todo.priority || "Medium",
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  saveTodos(todos);
  return todos;
};

/**
 * Update an existing todo
 * @param {number} id - Todo ID
 * @param {Object} updatedData - Updated todo data
 * @returns {Array} Updated todos array
 */
export const updateTodo = (id, updatedData) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...updatedData } : todo,
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};

/**
 * Delete a todo
 * @param {number} id - Todo ID to delete
 * @returns {Array} Updated todos array
 */
export const deleteTodo = (id) => {
  const todos = getTodos();
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredTodos);
  return filteredTodos;
};

/**
 * Toggle completion status of a todo
 * @param {number} id - Todo ID
 * @returns {Array} Updated todos array
 */
export const toggleTodoCompletion = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};

/**
 * Get a single todo by ID
 * @param {number} id - Todo ID
 * @returns {Object|null} Todo object or null if not found
 */
export const getTodoById = (id) => {
  const todos = getTodos();
  return todos.find((todo) => todo.id === id) || null;
};

/**
 * Export todos as JSON
 * @returns {string} JSON string of todos
 */
export const exportTodos = () => {
  const todos = getTodos();
  return JSON.stringify(todos, null, 2);
};

/**
 * Import todos from JSON
 * @param {string} jsonString - JSON string of todos
 * @returns {Array} Imported todos array
 */
export const importTodos = (jsonString) => {
  try {
    const todos = JSON.parse(jsonString);
    if (Array.isArray(todos)) {
      saveTodos(todos);
      return todos;
    }
    throw new Error("Invalid todos format");
  } catch (error) {
    console.error("Error importing todos:", error);
    return [];
  }
};
