import { SuggestedUser } from "@/app/types";
import React from "react";
import { Button } from "../ui/button";

export default function SuggestedCard(user: SuggestedUser) {
  return (
    <div className="flex space-x-10 items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div className="rounded-lg  border-white">
          <img
            src={user.profilePic}
            alt={`User Picture`}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs">{user.username}</span>
          <span className="text-sm text-gray-400">{user.name}</span>
        </div>
      </div>
      <Button variant={"outline"}>Follow</Button>
    </div>
  );
}
