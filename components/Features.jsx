import React from 'react'

const Features = () => {
  return (
    <section className="py-16  mt-10">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-bold text-gray-600 text-lg">AI Blog Generation</h3>
          <p className="mt-2 text-gray-600">Generate high-quality blogs with AI in seconds.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-bold text-gray-600 text-lg">Customizable Templates</h3>
          <p className="mt-2 text-gray-600">Choose from a variety of styles to suit your needs.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-bold text-gray-600 text-lg">SEO Optimization</h3>
          <p className="mt-2 text-gray-600">Ensure your blogs rank high on search engines.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-bold text-gray-600 text-lg">Save & Edit</h3>
          <p className="mt-2 text-gray-600">Easily save and edit your drafts anytime.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features
