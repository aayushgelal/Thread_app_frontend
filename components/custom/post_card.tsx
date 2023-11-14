import { ShareIcon } from "lucide-react";
import React from "react";
import {
  BiComment,
  BiCommentAdd,
  BiShare,
  BiSolidComment,
} from "react-icons/bi";
import { BsHeart, BsShare, BsShareFill, BsThreeDots } from "react-icons/bs";
interface PostCardData {
  post: string;
  likes: number;
  imageUrl?: string;
  username: string;
}
export default function PostCard({
  post,
  likes,
  imageUrl,
  username,
}: PostCardData) {
  return (
    <div className="flex  space-x-1 space-y-3">
      <div className="flex flex-col items-center space-y-2">
        <div className="h-10 w-10 bg-red-50 rounded-full"></div>
        <div className="flex-1 bg-gray-500  w-px"></div>
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex flex-1  items-center justify-between">
          <p className="  text-sm font-bold text-gray-200 mr-3">{username}</p>
          <div className="flex items-center text-gray-500 text-xs space-x-2">
            <p>8h</p>
            <BsThreeDots />
          </div>
        </div>
        <div>
          <p className=" text-xs text-gray-300">{post}</p>
        </div>
        <div className="flex items-center space-x-4">
          <BsHeart />
          <BiComment />
          <ShareIcon />
        </div>
        <hr />
      </div>
    </div>
  );
}
