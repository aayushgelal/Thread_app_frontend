"use client";
import LogoutSidebar from "@/components/custom/Logout_sidebar";
import NavBar from "@/components/custom/nav_sidebar";
import React, { ReactNode } from "react";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen p-2 flex ">
      <NavBar />
      <div className=" ml-64 w-7/12 ">{children}</div>
      <LogoutSidebar />
    </div>
  );
}
