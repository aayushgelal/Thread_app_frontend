"use client";
import LogoutSidebar from "@/components/custom/Logout_sidebar";
import CreatePost from "@/components/custom/create_post";
import NavBar from "@/components/custom/nav_sidebar";
import PostCard from "@/components/custom/post_card";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [datas, setdatas] = useState([]);
  const calldata = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setdatas(await response.json());
  };
  useEffect(() => {
    calldata();
  }, []);
  return (
    <div className="flex flex-col  ">
      <CreatePost username="Aayush Gelal" profileLink="" />
      {datas?.map((data: { userId: string; title: string; body: string }) => (
        <PostCard username={data.userId} title={data.title} body={data.body} />
      ))}
    </div>
  );
}
