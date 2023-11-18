import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  useState,
} from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { gql, useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";

const createPostMutation = gql`
  mutation Mutation($username: String!, $post: String!, $imageUrl: String) {
    createPost(username: $username, post: $post, imageUrl: $imageUrl) {
      post
    }
  }
`;
type Inputs = {
  username: string;
  post: string;
  imageLink: string;
};
const CreatePost = ({
  username,
  profileLink,
}: {
  username: string;
  profileLink: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [showLoggingInAlert, setShowLoggingInAlert] = useState(false);
  const [createPost, { data, loading, error }] =
    useMutation(createPostMutation);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setShowLoggingInAlert(true);

    createPost({
      variables: {
        username: username,
        post: data.post,
        imageLink: data.imageLink ?? null,
      },
    }).then(() => {
      setShowLoggingInAlert(false);
    });

    if (error) return `Submission error! ${error.message}`;
  };

  return (
    <div className="create-post flex flex-col mb-3">
      <div className="flex items-center space-x-3">
        <div className="rounded-full h-10 w-10 bg-red-50">
          <img src={profileLink} className=" bg-cover" />
        </div>
        <p className="text-xs">{username} </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex ">
          <Textarea
            placeholder="Start a thread"
            className="border-none shadow-none resize-none "
            {...register("post")}
          />
          <Button
            variant={"secondary"}
            className=" bg-transparent text-white "
            type="submit"
          >
            Post
          </Button>
        </div>
      </form>
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
