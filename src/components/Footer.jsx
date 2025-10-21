import React from "react";
import { Link } from "react-router"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-8 px-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className=" font-bold">Week3</h2>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Week3 Assignment- Sarota Raphael
          </p>
        </div>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-400">
            About
          </Link>
          <Link to="/tasks" className="hover:text-green-400">
            Tasks
          </Link>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
