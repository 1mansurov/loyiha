import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link
          to="/"
          className="relative text-white text-lg font-medium hover:text-yellow-300 transition-all"
        >
          Home
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-300 scale-x-0 transition-transform duration-300 ease-in-out origin-right hover:scale-x-100"></span>
        </Link>

        <Link
          to="/login"
          className="relative text-white text-lg font-medium hover:text-yellow-300 transition-all"
        >
          Login
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-300 scale-x-0 transition-transform duration-300 ease-in-out origin-right hover:scale-x-100"></span>
        </Link>

        <Link
          to="/profile"
          className="relative text-white text-lg font-medium hover:text-yellow-300 transition-all"
        >
          Profile
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-300 scale-x-0 transition-transform duration-300 ease-in-out origin-right hover:scale-x-100"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
