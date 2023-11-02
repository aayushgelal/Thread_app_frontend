"use client";
import CreatePost from "@/components/custom/create_post";
import PostCard from "@/components/custom/post_card";
import React from "react";

export default function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      <br />
      <hr></hr>
      <br></br>
      <CreatePost username="Aayush Gelal" profileLink="" />
      <PostCard username="Aayush Gelal" title="Hello" body="from Nepal" />
    </div>
  );
}
