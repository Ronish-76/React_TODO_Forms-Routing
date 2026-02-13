import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      todoInput: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    if (data.todoInput.trim()) {
      const newTodo = {
        id: Date.now(),
        text: data.todoInput,
        completed: false,
      };
      console.log("Adding Todo:", newTodo);
      setTodos([...todos, newTodo]);
      reset();
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
    console.log("Todo toggled, ID:", id);
  };

  const deleteTodo = (id) => {
    console.log("Deleting Todo, ID:", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h1>ToDo List</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          type="text"
          {...register("todoInput")}
          placeholder="Add a new todo..."
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer", width: "18px", height: "18px" }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: "4px 8px",
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ color: "#999" }}>No todos yet. Add one to get started!</p>
      )}
    </div>
  );
}
