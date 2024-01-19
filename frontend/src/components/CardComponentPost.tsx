import React from "react";


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

const CardComponentPost: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="text-2xl font-bold text-gray-800 text-center w-full">
            <div className="text-md font-semibold text-gray-800">{post.title}</div>
            <div className="text-sm text-gray-600">Author: {post.user?.name}</div>
            <div className="text-lg text-gray-700">{post.description}</div>
        </div>
    );
};

export default CardComponentPost;