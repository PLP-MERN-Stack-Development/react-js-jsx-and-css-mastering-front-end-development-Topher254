import TaskManager from '../components/TaskManager'
import Posts from '../components/Posts'
import React from 'react'

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to the Task Manager
        </h1>
        <p className='text-white'>Manage Your Tasks Efficiently</p>
      
      </section>

      {/* Task Manager Section */}
      <section>
        <TaskManager />
      </section>

      {/* API Integration Section */}
      <section>
        <Posts />
      </section>
    </div>
  )
}

export default Home