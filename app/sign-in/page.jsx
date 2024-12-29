'use client';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back!
        </h1>
        <p className="text-white text-center mb-8">
          Sign in to access your account and start exploring.
        </p>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default SignInPage;
