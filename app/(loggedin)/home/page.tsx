"use client";
import { User } from "@/app/redux/UserSlice";
import LogoutSidebar from "@/components/custom/Logout_sidebar";
import CreatePost from "@/components/custom/create_post";
import NavBar from "@/components/custom/nav_sidebar";
import PostCard from "@/components/custom/post_card";
import { gql, useQuery, useSubscription } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const getAllPosts = gql`
  query UserLogin {
    getAllPosts(orderBy: { field: createdTime, direction: DESC }) {
      id
      likes
      imageUrl
      post
      userId
      createdTime
    }
  }
`;
const getNewPosts = gql`
  subscription PostCreated {
    postCreated {
      id
      likes
      imageUrl
      post
      userId
    }
  }
`;

interface Posts {
  id: string;
  likes: number;
  imageUrl: string;
  post: string;
  userId: string;
}
export default function HomePage() {
  const [posts, setposts] = useState<[Posts] | null>(null);
  const router = useRouter();
  const { data, loading, error } = useQuery(getAllPosts);
  const NewPost = useSubscription(getNewPosts);
  const loggedUser = useSelector((state: any) => state.user);
  if (!loggedUser.username) {
    router.push("/login");
  }

  useEffect(() => {
    if (data) {
      console.log("DATA", data.getAllPosts);
      setposts(data.getAllPosts);
    }
  }, [data]);

  return (
    <div className="flex flex-col  ">
      <CreatePost
        username={loggedUser.username}
        profileLink={loggedUser.profileImageURL}
      />
      {posts?.map((post: Posts, index) => (
        <PostCard
          key={index}
          username={post.userId}
          post={post.post}
          imageUrl={post.imageUrl}
          likes={post.likes}
        />
      ))}
    </div>
  );
}
