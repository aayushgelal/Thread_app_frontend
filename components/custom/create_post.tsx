import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  useState,
} from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CreatePost = ({
  username,
  profileLink,
}: {
  username: string;
  profileLink: string;
}) => {
  const [postContent, setPostContent] = useState("");

  const handlePostContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  return (
    <div className="create-post flex flex-col mb-3">
      <div className="flex items-center space-x-3">
        <div className="rounded-full h-10 w-10 bg-red-50">{profileLink}</div>
        <p className="text-xs">{username} </p>
      </div>
      <div className="flex ">
        <Textarea
          placeholder="Start a thread"
          className="border-none shadow-none resize-none "
          value={postContent}
          onChange={handlePostContentChange}
        />
        <Button variant={"secondary"} className=" bg-transparent text-white ">
          Post
        </Button>
      </div>
      <AiOutlineLink
        className="text-gray-300 cursor-pointer"
        onClick={() => {}}
      />
      <br></br>

      <hr className="h-px" />
    </div>
  );
};

export default CreatePost;
