"use client";
import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4  ">
   <div className="flex w-full justify-between ">
  {/* Logo */}

  <h1 className="text-2xl font-bold w-[400px]">AI Blog</h1>

  {/* If Signed Out: Show only Login Button */}
  <SignedOut>
    <SignInButton mode="modal">
      <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
        Login
      </button>
    </SignInButton>
  </SignedOut>

  {/* If Signed In: Show Full Navbar */}
  <SignedIn >
    {/* Hamburger Icon (Hidden on Desktop) */}
    <button
      className="block md:hidden focus:outline-none "
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        className="h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    {/* Navigation Links */}
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      } absolute top-16 left-0 w-auto ml-[175px] bg-gray-800 md:bg-transparent justify-between md:static md:flex md:items-center md:space-x-8`}
    >
      <div className="flex flex-col md:flex-row md:space-x-8 items-center w-full md:w-auto">
        <a href="/" className="block py-2 px-4 hover:text-gray-300">
          Home
        </a>
        <a
          href="/blog-generate"
          className="block py-2 px-4 hover:text-gray-300"
        >
          Generate Blog
        </a>
        <a href="/about" className="block py-2 px-4 hover:text-gray-300">
          About
        </a>
      </div>
      {/* User Profile Button */}
      <div className="py-2 px-14 md:py-0">
        <UserButton />
      </div>
    </nav>
  </SignedIn>
</div>

    </header>
  );
};

export default Navbar;
