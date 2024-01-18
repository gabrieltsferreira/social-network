import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardComponent from "@/components/CardComponent";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const [checkUser, setCheckUser] = useState({ name: '', email: '' });


  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/login`, checkUser);

      if(response.status==200) {
        window.location.href = '/users';
      }
    } catch (error) {
      console.error('Error trying to login: ', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Login
        </h1>

        {/* Login Form */}
        <div>
          <form onSubmit={loginUser} className="p-4 bg-blue-100 rounded shadow">
            <input
              placeholder="Name"
              value={checkUser.name}
              onChange={(e) => setCheckUser({ ...checkUser, name: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
            />
            <input
              placeholder="Email"
              value={checkUser.email}
              onChange={(e) => setCheckUser({ ...checkUser, email: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
            />
            <button type="submit" className="w-full p2 text-white bg-blue-500 rounded">
              Login
            </button>
          </form>
        </div>

      </div>     
    </main>
  )
};