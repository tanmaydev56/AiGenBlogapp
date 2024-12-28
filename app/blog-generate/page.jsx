import React from 'react'

const Gneratae = () => {
  return (
    <section className="py-16 bg-white h-screen">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Generate Your Blog</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Enter a topic..." className="w-full px-4 py-2 border rounded"/>
        <select className="w-full px-4 py-2 border rounded">
          <option>Select a style</option>
          <option>Formal</option>
          <option>Casual</option>
          <option>Technical</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Generate Blog
        </button>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-bold">Blog Preview</h3>
        <p className="mt-2 text-gray-700">Your generated blog will appear here...</p>
      </div>
    </div>
  </section>
  

  )
}

export default Gneratae
