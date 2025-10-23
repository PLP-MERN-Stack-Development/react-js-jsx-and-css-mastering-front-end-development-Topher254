import React from "react"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About This Project</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This React application TAsk manager.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Features</h3>
            <ul className="text-blue-700 dark:text-blue-400 space-y-1">
              <li>• Task Management with Local Storage</li>
              <li>• API Integration with JSONPlaceholder</li>
              <li>• Dark/Light Theme Toggle</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Technologies</h3>
            <ul className="text-green-700 dark:text-green-400 space-y-1">
              <li>• React 18 with Hooks</li>
              <li>• Tailwind CSS for Styling</li>
              <li>• React Router for Navigation</li>
              <li>• Context API for State Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About