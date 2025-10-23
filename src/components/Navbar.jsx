import React, { useState } from 'react'
import { useLocation, Link } from 'react-router'
import { HiBars3BottomRight, HiMiniXCircle } from "react-icons/hi2"
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`w-full py-4 px-6 flex justify-between items-center shadow-lg transition-colors duration-200 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Task Manager
        </Link>
      </div>

      <div className='hidden md:flex items-center gap-6'>
        <Link
          className={`px-3 py-2 rounded-lg font-medium transition-colors ${
            isActive('/') 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`px-3 py-2 rounded-lg font-medium transition-colors ${
            isActive('/about') 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`px-3 py-2 rounded-lg font-medium transition-colors ${
            isActive('/tasks') 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          to="/"
        >
          Tasks
        </Link>
        
        <Button
          variant="secondary"
          onClick={toggleTheme}
          className="px-3 py-2 ml-4"
        >
          {isDark ? '☀️' : '🌙'}
        </Button>
      </div>

      <div className='md:hidden flex items-center gap-4'>
        <Button
          variant="secondary"
          onClick={toggleTheme}
          className="px-3 py-2"
        >
          {isDark ? '☀️' : '🌙'}
        </Button>
        
        <button 
          className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiMiniXCircle size={24} /> : <HiBars3BottomRight size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full md:hidden flex flex-col items-center gap-2 py-6 shadow-lg ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
          <Link
            className={`w-11/12 text-center py-3 rounded-lg font-medium transition-colors ${
              isActive("/") 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`w-11/12 text-center py-3 rounded-lg font-medium transition-colors ${
              isActive("/about") 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className={`w-11/12 text-center py-3 rounded-lg font-medium transition-colors ${
              isActive("/tasks") 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Tasks
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar