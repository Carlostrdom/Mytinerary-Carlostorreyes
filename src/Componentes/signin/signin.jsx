import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actionSignin/actionSignin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signinStore = useSelector((state) => state.signinStore);
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  const loading = signinStore.loading;
  console.log(loading);
  
  const error = signinStore.error;
  console.log(error);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
      <div className="hero-background flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <form
          onSubmit={() => handleSubmit()}
          className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-teal-400">
            Welcome Back
          </h2>
          <p className="text-center text-gray-400">Sign in to your account</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-sm font-semibold text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sign In
          </button>

          <button
            onClick={() => handleGoogleLogin()}
            className="flex items-center justify-center gap-2 w-full max-w-sm px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          {error && !loading && (
            <p className="mt-2 text-center text-sm text-red-500">
              Sorrry error when accessing your session
            </p>
          )}
          {loading && !error && (
            <p className="mt-2 text-center text-sm text-teal-400 animate-pulse">
              Loading...
            </p>
          )}
         

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium text-center text-teal-400 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
