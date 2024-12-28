import React from 'react'

const MyBlogs = () => {
  return (
    <section className="py-16  h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">My Blogs</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-bold text-lg">Blog Title</h3>
          <p className="text-gray-600">Short excerpt of the blog...</p>
          <div className="mt-2 flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Edit</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">Delete</button>
          </div>
        </div>
        {/* <!-- Repeat for more blogs --> */}
      </div>
    </div>
  </section>
  
  )
}

export default MyBlogs
