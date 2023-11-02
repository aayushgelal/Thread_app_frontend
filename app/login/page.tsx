import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center bg-cover bg-top  bg-blend-exclusion bg-[url('https://static.cdninstagram.com/rsrc.php/yH/r/JesX5Buw5jT.webp')]  ">
      <div className=" flex flex-col bg-black bg-opacity-96  min-w-max rounded-3xl p-10 space-y-3">
        <h1>Log in with your Instagram account</h1>
        <Input placeholder="Username, phone or email " />
        <Input placeholder="Password " />

        <Button>Login</Button>
        <div className=" text-center cursor-pointer">
          <h4 className=" text-gray-300 text-sm ">Forgot Password ?</h4>
        </div>
        <div className="flex items-center mt-10">
          <hr className="flex-1 border-t border-gray-300 dark:border-gray-400" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">Or</span>
          <hr className="flex-1 border-t border-gray-300 dark:border-gray-400" />
        </div>
        <Button>
          <div className="flex items-center  justify-around m-2 h-full w-full">
            <BiLogoInstagramAlt className="text-3xl" />
            Continue With Instagram
          </div>
        </Button>
      </div>
    </div>
  );
}
