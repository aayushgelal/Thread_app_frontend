import React, { useState } from "react";
import { Button } from "../ui/button";
import SuggestedCard from "./suggested_card";
import { SuggestedUser } from "@/app/types";
import QRCode from "react-qr-code";

function LogoutSidebar() {
  const [currentUser, setCurrentUser] = useState({
    username: "YourUsername",
    profilePic: "profile-pic.jpg",
    name: "Aayush Gelal",
  });

  const suggestedUsers: SuggestedUser[] = [
    { username: "User1", name: "Aayush Gelal", profilePic: "user1-pic.jpg" },
    { username: "User2", name: "Ella Johnson", profilePic: "user2-pic.jpg" },
    { username: "User3", name: "John Smith", profilePic: "user3-pic.jpg" },
    { username: "User4", name: "Luisa Martinez", profilePic: "user4-pic.jpg" },
    { username: "User5", name: "Chris Anderson", profilePic: "user5-pic.jpg" },
  ];

  const switchAccount = () => {
    // Implement your logic for switching accounts here
  };

  return (
    <div className="fixed top-0 right-4  z-10 min-w-min max-w-62  border-r">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={currentUser.profilePic}
            alt="Your Profile Picture"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                {currentUser.username}
              </span>
              <span className="text-sm font-semibold">{currentUser.name}</span>
            </div>
            <Button
              variant={"link"}
              className="text-xs text-blue-600"
              onClick={switchAccount}
            >
              Switch
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <h2 className="text-sm font-semibold mb-3">Suggested For You</h2>
        {suggestedUsers.map((user, index) => (
          <SuggestedCard
            key={index}
            username={user.username}
            profilePic={user.profilePic}
            name={user.name}
          />
        ))}
      </div>
      <div className="p-4 border-t self-auto">
        <h2 className="text-lg font-semibold">QR Code</h2>
        <QRCode
          className=" self-center"
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "60%" }}
          value={"www.facebook.com"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default LogoutSidebar;
