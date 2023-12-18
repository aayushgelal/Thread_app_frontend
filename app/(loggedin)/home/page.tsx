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
    getAllPosts {
      id
      likes
      imageUrl
      post
      userId
      createdTime
      user {
        username
        profileImageURL
      }
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
      createdTime
      user {
        username
        profileImageURL
      }
    }
  }
`;

interface Posts {
  id: string;
  likes: number;
  imageUrl: string;
  post: string;
  userId: string;
  createdTime: Date;
}
export default function HomePage() {
  const [posts, setposts] = useState<Posts[] | null>(null);
  const router = useRouter();
  const { data, loading, error } = useQuery(getAllPosts);
  const NewPost = useSubscription(getNewPosts);
  const loggedUser = useSelector((state: any) => state.user);
  if (!loggedUser.username) {
    router.push("/login");
  }
  useEffect(() => {

    if (NewPost.error) {
      console.error("Error in subscription:", NewPost.error);
    }
  
    if (NewPost.data) {
      setposts(() => {
      posts?.unshift(NewPost.data.postCreated)
      return posts
      }
      );
      // Do something with the received data
    }
  }, [NewPost.data]);
  useEffect(() => {

    if (data) {
      let arrangedData: Posts[] = [...data.getAllPosts].sort(
        (a: Posts, b: Posts) =>
          new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
      );
      setposts([...arrangedData]);
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
