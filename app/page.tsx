"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className=" bg-white text-black" placeholder="Hello"></Button>
    </main>
  );
}
