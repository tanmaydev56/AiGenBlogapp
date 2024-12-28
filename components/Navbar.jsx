import React from 'react'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
    <div className="text-2xl font-bold">AI Blog</div>
    <nav className="space-x-4">
      <a href="/" className="hover:text-gray-300">Home</a>
      <a href="/generate" className="hover:text-gray-300">Generate Blog</a>
      <a href="/blogs" className="hover:text-gray-300">My Blogs</a>
      <a href="/about" className="hover:text-gray-300">About</a>
    </nav>
    <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Login</button>
  </header>
  
  )
}

export default Navbar
