import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardComponentPost from "@/components/CardComponentPost";

interface User{
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  user: User;
}

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', description: ''});
  const [updatePost, setUpdateUser] = useState({ id: '', description: '' });


   //Fetching user session Token Simulation
   //Should be Implemented with Google Auth, using user_id for testing 
   const sessionID = '305bf8ba-5753-416d-99a9-96bb0f6f797f'

  //Get posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/posts`);
        setPosts(response.data.reverse());
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);



  // Create Posts
  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        var params = {
          newPost: newPost,
          sessionID: sessionID
        }  

        const response = await axios.post(`${apiUrl}/posts`, { params: params });
        setPosts([response.data, ...posts]);
        setNewPost({ title: '', description: ''});
    } catch (error) {
        console.error('Error creating post', error);
    }
  };


  //delete user
  const deleteUser = async (postID: string) => {
    try {
      await axios.delete(`${apiUrl}/posts/${postID}`);
      setPosts(posts.filter((post) => post.id !== postID ));
    } catch (error) {
      console.error('Error deleting user: ', error)
    }
  };




  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Posts
        </h1>

        {/* Create Post */}
        <form onSubmit={createPost} className="p-4 bg-blue-100 rounded shadow">
            <input
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={newPost.description}
              onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              className="mb-2 w-full p-2 border boder-gray-300 rounded"
              required
            />
            <button type="submit" className="w-full p2 text-white bg-blue-500 rounded">
              Add Post
            </button>
          </form>


        {/* Display Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-center bg-white">
              <CardComponentPost post={post}/>
              { post.user?.id == sessionID?
                <button onClick={() => deleteUser(post.id)} className="bg-red-500 hover">
                  Delete Post
                </button>
              
                : null 
              }        
            </div>
          ))}

        </div>

      </div>     
    </main>
  )
};