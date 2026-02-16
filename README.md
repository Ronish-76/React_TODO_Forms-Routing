# Course Management System - Todo List Application

A fully-featured React-based **Todo List application** demonstrating professional state management, routing, and data persistence patterns. This project meets comprehensive assignment requirements including component architecture, localStorage integration, filtering, search, and bonus features.

---

## 🚀 Quick Start

```bash
cd client
npm install
npm run dev
```

Visit **`http://localhost:5173/todo`** to start managing tasks!

---

## ✅ Requirements Fulfillment

### 1. Core Features (5/5)

- ✅ **Add To-Do Items** - Create tasks with title and optional description
- ✅ **Edit To-Do Items** - Update task titles and descriptions
- ✅ **Delete To-Do Items** - Remove tasks individually
- ✅ **Mark as Completed** - Toggle tasks between completed and pending
- ✅ **Filter & Search** - Filter by status (All/Active/Completed) + search by title/description

### 2. State Management

- ✅ **React Hooks** - Uses `useState` and `useEffect`
- ✅ **Logical Structure** - Tasks stored with title, description, priority, timestamps
- ✅ **LocalStorage** - All state automatically persisted to browser
- ✅ **Reusable Components** - Utility functions for centralized state management

### 3. Routing with React Router v6

- ✅ `/todo` - Main todo list with filters & search
- ✅ `/add` - Create new task page
- ✅ `/edit/:id` - Edit specific task by ID
- ✅ `/completed` - View only completed tasks (bonus)
- ✅ Direct URL access works for all routes

### 4. Project Structure

```
client/src
├── Components/
│   ├── Header.jsx           # Todo header with add button
│   ├── TodoItem.jsx         # Individual task component
│   ├── TodoList.jsx         # Task list container
│   └── NavbarComponents.jsx # Navigation bar
├── Pages/
│   ├── ToDo.jsx             # Main list with filters & search
│   ├── AddTodo.jsx          # Create new task form
│   ├── EditTodo.jsx         # Edit task form
│   ├── CompletedTodos.jsx   # View completed tasks (bonus)
│   └── ...other pages
├── Routes/
│   └── AppRoute.jsx         # React Router configuration
├── utils/
│   └── storage.js           # LocalStorage utility functions
├── App.jsx
├── index.css                # Tailwind + base styles
└── tailwind.config.js
```

### 5. Data Persistence

- ✅ **localStorage** - All tasks automatically saved & restored
- ✅ **Export/Import** - Download tasks as JSON, import them back (bonus)
- ✅ **No Data Loss** - Tasks persist across page reloads

### 6. Styling & UI

- ✅ **Tailwind CSS** - Modern, responsive design framework
- ✅ **Visual Differentiation** - Completed tasks show strikethrough
- ✅ **Responsive Design** - Mobile, tablet, and desktop support
- ✅ **Intuitive Navigation** - Clear header with "Add Task" button

### 7. Bonus Features ✨

- ✅ **Task Priority** - High/Medium/Low with color coding
- ✅ **Export/Import** - Download/upload tasks as JSON files
- ✅ **Dashboard Stats** - Total, completed, and active task counts
- ✅ **Completed Tasks Page** - Dedicated view for finished tasks
- ✅ **Search Functionality** - Search across title and description
- ✅ **Form Validation** - Error messages for required fields

---

## 📦 Tech Stack

| Technology          | Version | Purpose                 |
| ------------------- | ------- | ----------------------- |
| **React**           | 19+     | UI framework            |
| **Vite**            | 7+      | Build tool & dev server |
| **React Router**    | v6      | Client-side routing     |
| **Tailwind CSS**    | 4+      | Responsive styling      |
| **React Hook Form** | 7+      | Form management         |
| **PostCSS**         | 8+      | CSS processing          |
| **Autoprefixer**    | 10+     | CSS vendor prefixes     |

---

## 🔧 Installation & Setup

### Prerequisites

- Node.js v16 or higher
- npm v7 or higher

### Step 1: Navigate to Client Directory

```bash
cd client
```

### Step 2: Install Dependencies

```bash
npm install
```

Installs: React, React DOM, React Router, React Hook Form, Tailwind CSS, PostCSS, Autoprefixer

### Step 3: Start Development Server

```bash
npm run dev
```

App runs at **`http://localhost:5173/`** (Vite will assign different port if 5173 is busy)

> **Navigate to:** `http://localhost:5173/todo`

### Step 4: Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder

### Step 5: Preview Production Build

```bash
npm run preview
```

Tests the production build locally

---

## 📍 Routes Overview

| Route        | Component      | Description                              |
| ------------ | -------------- | ---------------------------------------- |
| `/`          | Home           | Home page                                |
| `/todo`      | ToDo           | **Main task list with filters & search** |
| `/add`       | AddTodo        | **Create new task form**                 |
| `/edit/:id`  | EditTodo       | **Edit specific task**                   |
| `/completed` | CompletedTodos | **View completed tasks**                 |
| `/counter`   | CounterApp     | Counter demo                             |
| `/login`     | Login          | Login page                               |

---

## 📚 How to Use

### Add a Task

1. Click **"+ Add Task"** button in the header
2. Enter task title (required)
3. Add optional description and priority
4. Click **"Create Task"**
5. Task appears immediately in the main list

### Edit a Task

1. Find the task in the list
2. Click the **"Edit"** button
3. Update title, description, or priority
4. Click **"Update Task"**

### Mark Task as Complete

1. Check the checkbox next to any task
2. Task shows strikethrough and grays out
3. Status updates automatically

### Delete a Task

1. Click **"Delete"** button next to the task
2. Task is removed immediately
3. Changes save to localStorage automatically

### Filter Tasks

1. Use the **Filter dropdown** (All Tasks / Active Tasks / Completed Tasks)
2. View updates in real-time

### Search Tasks

1. Type in the **Search box** at the top
2. Results filter by task title and description instantly

### Export/Import Tasks

1. **Export**: Click "📥 Export Tasks" → downloads as JSON file
2. **Import**: Click "📤 Import Tasks" → select a JSON file to import

---

## 🏗️ Component Architecture

### Header.jsx

- Displays "My Tasks" title
- Shows "Add Task" button linking to `/add`
- Responsive gradient background

### TodoItem.jsx

- Reusable component for individual tasks
- Shows title, description, priority badge
- Includes checkbox, Edit, Delete buttons
- Visual priority color coding (High=red, Medium=yellow, Low=green)

### TodoList.jsx

- Container component accepting todo array
- Maps todos to TodoItem components
- Handles empty state messaging
- Accepts callbacks for toggle and delete

### Utils/storage.js

All localStorage operations centralized:

- `getTodos()` - Retrieve all tasks
- `addTodo(todo)` - Create new task
- `updateTodo(id, data)` - Update existing task
- `deleteTodo(id)` - Remove task
- `toggleTodoCompletion(id)` - Toggle complete status
- `getTodoById(id)` - Get single task by ID
- `exportTodos()` - Export all tasks as JSON
- `importTodos(json)` - Import tasks from JSON

---

## 📊 State Structure

Each todo object contains:

```javascript
{
  id: 1707912345000,              // Unique timestamp-based ID
  title: "Buy groceries",         // Task title (required)
  description: "Milk, eggs...",   // Optional details
  completed: false,               // Completion status
  priority: "High",               // High, Medium, Low
  createdAt: "2026-02-14T..."    // ISO timestamp
}
```

---

## 💾 Data Storage

### localStorage Key

Tasks are stored under: **`courseManagement_todos`**

### Manual Clear (Browser Console)

```javascript
localStorage.removeItem("courseManagement_todos");
location.reload();
```

### View in DevTools

- Open DevTools → Application tab → LocalStorage
- Look for key: `courseManagement_todos`

---

## 💻 Code Examples

### Adding a Task

```javascript
import { addTodo } from "../utils/storage";

const formData = {
  title: "Buy groceries",
  description: "Milk, eggs, bread",
  priority: "High",
};

const updatedTodos = addTodo(formData);
```

### Filtering Tasks

```javascript
const filteredTodos = todos.filter((todo) => {
  if (filter === "Active" && todo.completed) return false;
  if (filter === "Completed" && !todo.completed) return false;

  if (searchTerm.trim()) {
    const searchLower = searchTerm.toLowerCase();
    return (
      todo.title.toLowerCase().includes(searchLower) ||
      todo.description.toLowerCase().includes(searchLower)
    );
  }
  return true;
});
```

---

## 🎨 Features in Action

### Dashboard Statistics

- **Total Tasks** - Count of all tasks
- **Completed** - Count of finished tasks
- **Active** - Count of pending tasks

### Priority System

- 🔴 **High** - Red badge
- 🟡 **Medium** - Yellow badge
- 🟢 **Low** - Green badge

### Responsive Design

On mobile (< 768px):

- Navbar becomes compact
- Stats grid stacks vertically
- Controls stack vertically
- Touch-friendly buttons

---

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern browsers with ES6+ support

---

## 🔍 Troubleshooting

### Todos not persisting?

- ✓ Check browser localStorage is enabled
- ✓ Open DevTools → Application tab → LocalStorage
- ✓ Verify key is `courseManagement_todos`

### Edit page shows "Todo not found"?

- ✓ URL ID might be incorrect
- ✓ Try accessing from the main list

### Form not submitting?

- ✓ Check browser console for errors
- ✓ Ensure title field is filled (required)
- ✓ Verify Tailwind CSS is loaded (check DevTools styles)

### Dev server not starting?

- ✓ Ensure you're in the `client` directory
- ✓ Run `npm install` again
- ✓ Check if port 5173 is already in use

---

## ⚡ Performance Considerations

- Todos loaded once on mount with `useEffect`
- localStorage queries optimized (single JSON parse)
- Filtering done client-side (suitable for reasonable task counts)
- Components memoized where appropriate

---

## 🚀 Scripts Available

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run lint     # Run ESLint code quality check
npm run preview  # Preview production build locally
```

---

## 📝 Developer Notes

### Adding New Features

1. **New Routes**: Add to `Routes/AppRoute.jsx`
2. **New Pages**: Create in `Pages/` folder
3. **New Components**: Create in `Components/` folder
4. **localStorage Changes**: Update `utils/storage.js`

### Code Quality Standards

- ✅ Well-commented throughout
- ✅ Follows React best practices
- ✅ Reusable, modular components
- ✅ Clean folder structure
- ✅ Consistent naming conventions

---

## 🎯 Future Enhancements

- Backend API integration (replace localStorage)
- Task categories/tags
- Due dates and reminders
- Dark mode toggle
- Drag-and-drop reordering
- Recurring tasks
- Collaboration features
- Task priority levels with notifications
- Calendar view integration

---

## 📋 Submission Checklist

- ✅ React Router implemented for all routes
- ✅ localStorage integration with data persistence
- ✅ Reusable components (Header, TodoItem, TodoList)
- ✅ Tailwind CSS for responsive design
- ✅ State management with React Hooks
- ✅ Filtering (All/Active/Completed)
- ✅ Search functionality
- ✅ Edit and delete operations
- ✅ Priority system (bonus)
- ✅ Export/Import (bonus)
- ✅ Well-commented code
- ✅ Responsive UI
- ✅ Professional project structure
- ✅ Comprehensive README

---

## 📄 License

This project is part of a course assignment demonstrating modern React patterns and best practices.

---

## 👤 Author

Created as a demonstration of professional React development practices.

**Last Updated**: February 14, 2026  
**Version**: 2.0.0 - Complete Feature Implementation
