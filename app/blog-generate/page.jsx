"use client";
import React, { useState } from 'react';
import { Client, Databases } from 'appwrite';

// Import the Google Generative AI library
const { GoogleGenerativeAI } = require("@google/generative-ai");

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
  const databases = new Databases(client);
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  

const Gneratae = () => {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);

  // API key and model setup
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  // Function to handle blog generation
  const handleGenerate = async () => {
    if (!topic || !style) {
      alert("Please enter a topic and select a style!");
      return;
    }

    setLoading(true);
    setBlogContent("");

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      // Send the user input (topic and style) to the API
      const result = await chatSession.sendMessage(`Generate a ${style} blog on the topic: ${topic}`);
     
      // Store the generated blog in Appwrite
      await databases.createDocument(databaseId,collectionId,"unique()",{
       title: topic,
       content:result.response.text(),
       style:style,
       createdAt: new Date().toISOString(),
      });



       
      // Update the blog content state with the generated text
      setBlogContent(result.response.text());
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while generating the blog.");
    } finally {
      setLoading(false);
    }
  };

  // Function to toggle between truncated and full content
  const toggleContent = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <section className="py-16   h-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Generate Your Blog</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter a topic..."
            className="w-full px-4 py-2 border rounded"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 border rounded"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="">Select a style</option>
            <option value="Formal">Formal</option>
            <option value="Casual">Casual</option>
            <option value="Technical">Technical</option>
          </select>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Blog"}
          </button>
        </div>

        <div className="mt-3 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-bold">Blog Preview</h3>
          <div className="mt-2 text-gray-700">
            {blogContent ? (
              <div >
                {/* Truncate the content if it's too long */}
                <p className="whitespace-pre-line ">
                  {isTruncated ? blogContent.slice(0, 1000) : blogContent}
                </p>
                {blogContent.length > 1000 && (
                  <button
                    className="mt-2 text-blue-600"
                    onClick={toggleContent}
                  >
                    {isTruncated ? "Read more" : "Show less"}
                  </button>
                )}
              </div>
            ) : (
              <p className='h-[187px]'>Your generated blog will appear here...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gneratae;
