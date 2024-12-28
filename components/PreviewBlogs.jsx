import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Replace with your Appwrite project ID

const databases = new Databases(client);
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID; // Replace with your Blogs collection ID
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
const PreviewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Debug environment variables
        console.log("Database ID:", databaseId);
        console.log("Collection ID:", collectionId);

        // Fetch all documents from the Blogs collection
        const response = await databases.listDocuments(databaseId, collectionId);

        // Set the blogs data in state
        setBlogs(response.documents);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <section className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.$id}
              className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">
                {truncateText(blog.content, 150)} {/* Truncate to 150 characters */}
              </p>
              <p className="mt-4 text-sm text-gray-500">Style: {blog.style}</p>
              <p className="text-sm text-gray-500">Created At: {blog.createdAt}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </section>
  
  );
};

export default PreviewBlogs;
