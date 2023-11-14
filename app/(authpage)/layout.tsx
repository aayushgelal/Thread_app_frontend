"use client";
import LogoutSidebar from "@/components/custom/Logout_sidebar";
import NavBar from "@/components/custom/nav_sidebar";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center bg-cover bg-top  bg-blend-exclusion bg-[url('https://static.cdninstagram.com/rsrc.php/yH/r/JesX5Buw5jT.webp')]  ">
      <div className="  bg-black bg-opacity-96  min-w-max rounded-3xl p-10 ">
        {children}
      </div>
    </div>
  );
}
