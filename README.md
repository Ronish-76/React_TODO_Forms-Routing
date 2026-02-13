# State Management ToDo List Application

A modern React-based ToDo List application demonstrating fundamental state management concepts using React Hooks.

## Overview

This project showcases a practical implementation of React's `useState` Hook for managing component state. It's a lightweight course management system with a primary focus on the ToDo List component, perfect for learning state management patterns in React.

## Features

### ToDo List Component

- ✅ **Add Todos**: Create new todo items using the input field
- ✅ **Mark as Complete**: Toggle completion status with a checkbox
- ✅ **Delete Todos**: Remove todos with the delete button
- ✅ **Keyboard Support**: Press Enter to add a new todo
- ✅ **Visual Feedback**: Completed todos show with strikethrough text

### Counter App (Bonus)

- Simple counter with increment and decrement functionality
- Demonstrates basic state management with `useState`

## Tech Stack

- **Frontend Framework**: React 19+
- **Build Tool**: Vite
- **Styling**: Inline CSS
- **State Management**: React Hooks (`useState`)
- **Routing**: React Router DOM v6
- **Form Management**: React Hook Form
- **Development**: ESLint, React Refresh

## Routing System

This application uses **React Router DOM v6** for client-side routing.

### Route Configuration

Routes are managed in [Routes/AppRoute.jsx](client/src/Routes/AppRoute.jsx):

```jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/counter" element={<CounterApp />} />
    <Route path="/infocard" element={<InfoCard />} />
    <Route path="/todo" element={<ToDo />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>
```

### Available Routes

| Route       | Component      | Description              |
| ----------- | -------------- | ------------------------ |
| `/`         | Home           | Home page                |
| `/Home`     | Home           | Home page alternate      |
| `/counter`  | CounterApp     | Counter demonstration    |
| `/infocard` | InfoCard       | Information card display |
| `/todo`     | ToDo           | Todo list management     |
| `/login`    | Login          | Login page               |

### Navigation

The Navbar component is persistent across all routes and provides links to all pages. Users can navigate using:
- Navbar links
- Direct URL changes
- React Router's `<Link>` or `<Navigate>` components

## State Management Explained

This project uses **React's `useState` Hook** for all state management - a simple yet powerful approach for small to medium applications.

### Key Concepts Implemented:

1. **Local Component State**

   ```jsx
   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
   ```

   - State is stored locally within each component
   - Perfect for isolated, independent components

2. **Immutable State Updates**

   ```jsx
   // Adding a todo
   setTodos([...todos, { id: Date.now(), text: input, completed: false }]);

   // Toggling completion
   setTodos(
     todos.map((todo) =>
       todo.id === id ? { ...todo, completed: !todo.completed } : todo,
     ),
   );
   ```

   - Uses spread operator to create new arrays/objects
   - Follows React's immutability principle
npm install react-router-dom
   npm install react-hook-form
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or another port if 5173 is busy)

4. **Build for production**
   ```bash
   npm run build
   ```

### Dependencies

- `react@^19.2.0` - React library
- `react-dom@^19.2.0` - React DOM rendering
- `react-router-dom@latest` - Client-side routing
- `react-hook-form@latest` - Form state management { useForm } from "react-hook-form";

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
        completed: false 
      };
      setTodos([...todos, newTodo]);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("todoInput")}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
```

### Key Features

- **Controlled Forms**: Input values managed by React Hook Form
- **Console Logging**: Form submissions logged to browser console for debugging
- **Form Reset**: `reset()` clears the input after submission
- **Validation Ready**: Easy to add validation rules with React Hook Form
- **Performance Optimized**: Minimal re-renders compared to useState alone

### Form Data Flow

1. User types in input field
2. Input registered with `register("todoInput")`
3. On submit, `handleSubmit` triggers `onSubmit`
4. Form data logged to console
5. Todo added to state
6. Form reset with `reset()`

## Project Structure

```
CourseManagementSystem/
├── client/
│   ├── src/
│   │   ├── App.jsx              # Main app component
│   │   ├── Routes/
│   │   │   └── AppRoute.jsx     # Routing configuration
│   │   ├── Pages/
│   │   │   ├── Home.jsx         # Home page
│   │   │   ├── About.jsx        # About page
│   │   │   ├── Contact.jsx      # Contact page
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Features.jsx     # Features page
│   │   │   ├── CounterApp.jsx   # Counter demo page
│   │   │   └── ToDo.jsx         # Todo list page (primary feature)
│   │   ├── Components/
│   │   │   └── NavbarComponents.jsx  # Navigation bar
│   │   ├── infocard.jsx         # Info card component
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ronish-76/StateManagement_TODO_list.git
   cd CourseManagementSystem/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or another port if 5173 is busy)

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage

### Adding a Todo

1. Type your todo text in the input field
2. Click the "Add" button or press Enter
3. The todo appears in the list below

### Completing a Todo

- Click the checkbox next to any todo to mark it as complete
- Completed todos show with strikethrough text and grayed out color

### Deleting a Todo

- Click the "Delete" button on any todo to remove it permanently

## Code Highlights

### Add Todo Function

```jsx
const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }
};
```

### Toggle Completion

```jsx
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  );
};
```

### Delete Todo

```jsx
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

## State Management Patterns Used

| Pattern                    | Usage                                              |
| -------------------------- | -------------------------------------------------- |
| **Local State**            | Each component manages its own state independently |
| **Immutable Updates**      | Arrays and objects are never mutated directly      |
| **Single Source of Truth** | State is the single source of truth for the UI     |
| **Controlled Components**  | Input field value is controlled by state           |
| **Event Handlers**         | State updates triggered by user interactions       |

## When to Level Up

This project demonstrates basic state management. As your application grows, consider:

- **Context API**: For sharing state across multiple components
- **Redux/Zustand**: For complex global state management
- **Local Storage**: For persisting todos across sessions
- **Backend API**: For server-side todo persistence

## Learning Outcomes

By studying this project, you'll understand:

- ✅ How to use React Hooks (`useState`)
- ✅ Managing multiple pieces of state
- ✅ Updating state immutably
- ✅ Event handling in React
- ✅ Conditional rendering
- ✅ List rendering with `.map()`
- ✅ Component lifecycle with state

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern browsers with ES6+ support

## License

This project is part of a college course assignment.

## Author

Created by: [Your Name]
Repository: [https://github.com/Ronish-76/StateManagement_TODO_list.git](https://github.com/Ronish-76/StateManagement_TODO_list.git)

---

**Happy Coding!** 🚀
