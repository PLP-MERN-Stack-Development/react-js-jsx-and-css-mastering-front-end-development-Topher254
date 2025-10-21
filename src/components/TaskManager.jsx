import React, { useEffect, useState } from 'react'
import Button from './Button';

const TaskManager = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All")

  // GET- all tasks
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const savedTasks =JSON.parse(saved);
      setTasks(savedTasks)

    }
  }, [])


  // SAVE- whenever tasks change,using a dependecy array
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  // CREATE-creating a task

  const handleAddTask =()=>{
    if(newTask.trim()==="")return;
    const newTaskItem={
      id:Date.now(),
      text:newTask,
      completed:false
    };

    setTasks([...tasks,newTaskItem]);
      setNewTask("");
  

  }

  // DELETE - a task

  const handleDeleteTask=(id)=>{
    const newList = tasks.filter((task)=>{
      task.id !== id
    });
    setTasks(newList)

  }


  // TOGGLECOMPLETE TASK
  const handleToggleComplete=(id)=>{
    const updatedTasks = tasks.map((task)=>{
      task.id === id ? {...task,completed:!task.completed}:task
    });
    setTasks(updatedTasks);

  }
// filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; // for "All"
  });



  return (
    <div>
      <div className="p-6 max-w-md mx-auto bg-white text-black shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      {/* Input + Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded flex-grow"
        />
        <Button
        variant="primary"
          onClick={handleAddTask}
        >Add</Button>
          
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <Button
        variant="primary"
          className={`px-3 py-1 rounded ${
            filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </Button>
        <Button
        variant="primary"
          className={`px-3 py-1 rounded ${
            filter === "Active" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </Button>
        <Button
        variant="secondary"
          className={`px-3 py-1 rounded ${
            filter === "Completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </Button>
      </div>

      {/* Tasks List */}
      <ul>
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks to show</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div
                onClick={() => handleToggleComplete(task.id)}
                className={`flex-grow cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </div>
              <Button
              variant="danger"
                onClick={() => handleDeleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
    </div>
  )
}

export default TaskManager
