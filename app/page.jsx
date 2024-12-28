"use client";
import Features from "@/components/Features";
import PreviewBlogs from "@/components/PreviewBlogs";
import Image from "next/image";

export default function Home() {
  return (
    <section className="   text-white text-center py-20">
    <h1 className="text-4xl font-bold">AI-Powered Blog Generator</h1>
    <p className="mt-4 text-lg">Create compelling blogs effortlessly with the power of AI.</p>
    <button className="mt-6 bg-pink-500 px-6 py-3 rounded text-white hover:bg-pink-400"
   
   onClick={() => {
      window.location.href = "/blog-generate";
    }}
    >
      Start Generating
    </button>

{/* feautres section  */}
      <Features/>
    {/* display some blogs Later */}
    <PreviewBlogs/>
  </section>
  
  );
}
