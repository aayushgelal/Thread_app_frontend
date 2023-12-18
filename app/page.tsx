"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { setTheme } = useTheme();
  const router=useRouter()
  const loggedUser = useSelector((state: any) => state.user);
  if (!loggedUser.username) {
    router.push("/login");
  }else{
    router.push("/home")
  }
  setTheme("dark");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
