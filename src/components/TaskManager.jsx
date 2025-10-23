import React, { useState } from 'react'
import Button from './Button'
import useLocalStorage from '../hooks/useLocalStorage'
import { useTheme } from '../context/ThemeContext'

const TaskManager = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useLocalStorage('tasks', []) // Using custom hook
  const [filter, setFilter] = useState("All")
  const { isDark } = useTheme() // Using theme context

  // CREATE-creating a task
  const handleAddTask = () => {
    if(newTask.trim() === "") return;
    const newTaskItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  }

  // DELETE - a task
  const handleDeleteTask = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList)
  }

  // TOGGLECOMPLETE TASK
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  }

  // filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; // for "All"
  });

  // Task statistics
  const activeTasksCount = tasks.filter(task => !task.completed).length
  const completedTasksCount = tasks.filter(task => task.completed).length

  return (
    <div className={`p-6 max-w-md mx-auto shadow-md rounded-lg transition-colors duration-200 ${
      isDark 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-black'
    }`}>
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      {/* Task Statistics */}
      <div className="flex justify-between mb-4 text-sm">
        <span>Total: {tasks.length}</span>
        <span>Active: {activeTasksCount}</span>
        <span>Completed: {completedTasksCount}</span>
      </div>

      {/* Input + Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          className={`border p-2 rounded grow transition-colors ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-black'
          }`}
        />
        <Button variant="primary" onClick={handleAddTask}>
          Add
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <Button
          variant={filter === "All" ? "primary" : "secondary"}
          onClick={() => setFilter("All")}
        >
          All
        </Button>
        <Button
          variant={filter === "Active" ? "primary" : "secondary"}
          onClick={() => setFilter("Active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "Completed" ? "primary" : "secondary"}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </Button>
      </div>

      {/* Tasks List */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className={`text-center py-4 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            No tasks to show
          </p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 border rounded transition-all duration-200 ${
                isDark
                  ? 'border-gray-600 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-50'
              } ${
                task.completed 
                  ? isDark 
                    ? 'bg-green-900/20 border-green-800' 
                    : 'bg-green-50 border-green-200'
                  : ''
              }`}
            >
              <div
                onClick={() => handleToggleComplete(task.id)}
                className={`cursor-pointer flex-1 ${
                  task.completed 
                    ? 'line-through text-gray-500' 
                    : isDark 
                      ? 'text-white' 
                      : 'text-gray-800'
                }`}
              >
                {task.text}
              </div>
              <Button
                variant="danger"
                onClick={() => handleDeleteTask(task.id)}
                className="ml-2"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TaskManager