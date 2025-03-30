import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singin({ props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  
  const signinHandler = (e) => {
    e.preventDefault();
    
    // Check if the username already exists
    // console.log(props)
    let exist = props.user.some(user => user.username === username);
    
    if (password === confirmPassword && !exist) {
      // Add the new user to the list
      props.setUser(prevUsers => [
      ...prevUsers,
        { username: username, password: password }
      ]);
      
      console.log("User created:", username, password);
      alert("User created:", username, password)
      navigate("/")
    } else {
      if (exist) {
        console.log("User already exists");
        alert("User already exists")
      } else {
        console.log("Passwords do not match");
        alert("Passwords do not match")
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form className="bg-white/90 shadow-2xl rounded-2xl p-8 w-96 space-y-6 backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">
          Signin
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
            value={username}
            // your inputhandler logic goes here
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-2 text-purple-600">
            {" "}
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="confirm-password" className="mb-2 text-purple-600">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            className="px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            value={confirmPassword}
            onChange={(e) => {
              console.log(e.target.value);
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors"
          onClick={signinHandler}
        >
          Signin
        </button>
      </form>
    </div>
  );
}

export default Singin;
