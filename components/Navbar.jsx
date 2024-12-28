"use client";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      {/* If Signed Out: Show only Login Button */}
      <SignedOut>
        <div className="w-full flex justify-between">
        <div className="text-2xl font-bold">AI Blog</div>
          <SignInButton mode="modal">
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
              Login
            </button>
          </SignInButton>
     
        </div>
      </SignedOut>
      
      {/* If Signed In: Show Full Navbar */}
      <SignedIn>
        {/* Logo */}
       

        {/* Navigation Links */}
        <nav className="space-x-4 flex w-full justify-between ">
        <div className="text-2xl font-bold">AI Blog</div>
        <div className="flex space-x-9">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/blog-generate" className="hover:text-gray-300">Generate Blog</a>
          <a href="/my-blogs" className="hover:text-gray-300">My Blogs</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          </div>
          <UserButton />
        </nav>

        {/* User Profile Button */}
        
      </SignedIn>
    </header>
  );
};

export default Navbar;
