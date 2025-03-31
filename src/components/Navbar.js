import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white shadow-md">
      <h1 className="text-2xl font-bold">AVM Tech Solutions</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
