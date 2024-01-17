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
  const [updateUser, setUpdateUser] = useState({ id: '', name: '' });

  //fetch users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUsers(response.data.reverse());
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <h1>Users Management</h1>

        {/* Display users */}
        <div>
          {users.map((user) => (
            <div key={user.id} className="">
              <CardComponent card={user}/>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
};