import React from "react";
import { Link } from "react-router-dom";

/**
 * Header component for the Todo app
 * Displays title and action buttons
 */
export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Tasks</h1>
            <p className="text-blue-100">
              Organize your day, one task at a time
            </p>
          </div>
          <Link
            to="/add"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            + Add Task
          </Link>
        </div>
      </div>
    </div>
  );
}
