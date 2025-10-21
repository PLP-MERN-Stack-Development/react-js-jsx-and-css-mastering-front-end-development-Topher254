import React, { useState } from 'react'
import { useLocation, Link } from 'react-router';
import { HiBars3BottomRight, HiMiniXCircle } from "react-icons/hi2";

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);


  const isActive = (path) => {
    console.log("Current Path:", location);
    return location.pathname === path;
  };

  const linkStyle = "hover:cursor-pointer hover:opacity-80 border-b"
  const activeStyle = "border-green-500"

  // close and open the menu
  const handleMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className='bg-black text-white w-full py-3 px-8 flex justify-between'>
      <div>
        <h1>Week3</h1>
      </div>
      <div className=' gap-4 hidden md:flex lg:flex'>
        <Link
          className={`${linkStyle} ${isActive('/') ? activeStyle : ''}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${linkStyle} ${isActive('/about') ? activeStyle : ''}`}

          to="/about"
        >
          About
        </Link>
        <Link
          className={`hover:cursor-pointer hover:opacity-80 border-b ${isActive('/tasks') ? 'text-yellow-400' : ''}`}
          to="/tasks"
        >
          Tasks
        </Link>
      </div>
      <div className='md:hidden flex'>
        <button className='cursor-pointer ' onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          {menuOpen ?  <HiMiniXCircle />:<HiBars3BottomRight />}

        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden">
          <Link
            className={`${linkStyle} ${isActive("/") ? activeStyle : ""}`}
            to="/"
            onClick={handleMenu}
          >
            Home
          </Link>
          <Link
            className={`${linkStyle} ${isActive("/about") ? activeStyle : ""}`}
            to="/about"
            onClick={handleMenu}
          >
            About
          </Link>
          <Link
            className={`${linkStyle} ${isActive("/tasks") ? activeStyle : ""}`}
            to="/tasks"
            onClick={handleMenu}
          >
            Tasks
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
