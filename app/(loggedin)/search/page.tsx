"use client";
import { SuggestedUser } from "@/app/types";
import SuggestedCard from "@/components/custom/suggested_card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SuggestedUser[]>([]);
  const Users: SuggestedUser[] = [
    { username: "User1", name: "Aayush Gelal", profilePic: "user1-pic.jpg" },
    { username: "User2", name: "Ella Johnson", profilePic: "user2-pic.jpg" },
    { username: "User3", name: "John Smith", profilePic: "user3-pic.jpg" },
    { username: "User4", name: "Luisa Martinez", profilePic: "user4-pic.jpg" },
    { username: "User5", name: "Chris Anderson", profilePic: "user5-pic.jpg" },
  ];
  useEffect(() => {
    setSearchResults(() =>
      Users.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, Users]);

  return (
    <div className=" flex-1 w-4/6 self-center   ">
      <Input
        placeholder="Explore"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className=""
      />
      {searchValue && (
        <div className=" cursor-pointer relative top-14 left-0  border border-gray-300 p-4">
          <ul>
            {searchResults.map((result: SuggestedUser, index) => {
              return (
                <div className="mb-2" key={index}>
                  <SuggestedCard
                    name={result.name}
                    username={result.username}
                    profilePic={result.profilePic}
                  />
                  <hr />
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
