/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.NEXT_PUBLIC_CLERK_SECRET_KEY,
    },
  };
  
  export default nextConfig;
  