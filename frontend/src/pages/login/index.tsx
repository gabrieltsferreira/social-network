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
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });


  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUsers([response.data, ...users]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error creating user: ', error);
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
          <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
            <input
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
            />
            <input
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
            />
            <button type="submit" className="w-full p2 text-white bg-blue-500 rounded">
              Add User
            </button>
          </form>
        </div>

      </div>     
    </main>
  )
};