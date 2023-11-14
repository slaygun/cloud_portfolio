import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-auto mr-4"
          />

        </div>

        {/* Feed of Blogs/Stories */}
        <div className="hidden md:flex items-center">
          <a href="#" className="text-white mr-8 hover:text-gray-300">Feed</a>
          <a href="#" className="text-white mr-8 hover:text-gray-300">Blogs</a>
          <a href="#" className="text-white mr-8 hover:text-gray-300">Stories</a>
          <a href="#" className="text-white mr-8 hover:text-gray-300">About</a>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;