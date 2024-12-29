'use client';
import React from 'react';

const About = () => {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return <div>Error: Missing Clerk publishable key.</div>;
  }

  return (
    <section className="h-screen py-16 bg-gradient-to-br from-blue-900 via-purple-600 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-8">
          We are a passionate team dedicated to making content creation easier and more efficient. Our AI-powered blog generator is designed to help you turn your ideas into engaging, high-quality blog posts in no time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to revolutionize the way people create content. We aim to provide a tool that makes writing faster, easier, and more accessible to everyone, from bloggers to businesses.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p>
              Our AI-powered platform offers customizable templates, SEO optimization, and quick generation of high-quality blogs. Whether you’re a beginner or a professional, we provide the tools to make content creation effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
