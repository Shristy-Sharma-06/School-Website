import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ props }) {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(props);
    if (
      props.user.some(user => user.username === props.username && user.password === props.password)
    ) {
      console.log("Login Success");
      alert("login Successful")
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300">
      <form className="bg-white/90 shadow-2xl rounded-2xl p-8 w-96 space-y-6 backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">
          Login
        </h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="mb-2 text-purple-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            onChange={(e) => {
              console.log(e.target.value);
              props.setUsername(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-2 text-purple-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            onChange={(e) => {
              console.log(e.target.value);
              props.setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-300 text-white rounded-md hover:from-purple-500 hover:to-pink-200 transition-colors"
          onClick={loginHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
