"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/UserSlice";

type Inputs = {
  password: string;
  email: string;
};

const getUser = gql`
  query Query($email: String!, $password: String!) {
    UserLogin(email: $email, password: $password) {
      email
      profileImageURL
      firstName
      username
      lastName
    }
  }
`;
export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();

  const { loading, error, data, refetch } = useQuery(getUser, {
    variables: { email: "", password: "" },
    skip: true,
  });
  const [showLoggingInAlert, setShowLoggingInAlert] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setShowLoggingInAlert(true);

    const {
      data: { UserLogin },
    } = await refetch({ email, password });
    if (UserLogin) {
      router.push("/home");
      console.log("data received", UserLogin);

      dispatch(
        logIn({
          ...UserLogin,
        })
      );
    }

    if (error) return `Submission error! ${error.message}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-3">
        <h1>Log in with your Instagram account</h1>
        <Input placeholder="Username, phone or email " {...register("email")} />
        <Input placeholder="Password " {...register("password")} />
        {showLoggingInAlert ? (
          <Button type="button" disabled>
            Logging in...
          </Button>
        ) : (
          <Button type="submit">Login</Button>
        )}{" "}
        <div className=" text-center cursor-pointer">
          <h4 className=" text-gray-300 text-sm ">Forgot Password ?</h4>
        </div>
        <div className="flex items-center mt-10">
          <hr className="flex-1 border-t border-gray-300 dark:border-gray-400" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">Or</span>
          <hr className="flex-1 border-t border-gray-300 dark:border-gray-400" />
        </div>
        <Button>
          <Link href={"/signup"}>
            <div className="flex items-center  justify-around m-2 h-full w-full">
              <BiLogoInstagramAlt className="text-3xl" />
              Don`&apos;`t Have an Account ? Sign Up
            </div>
          </Link>
        </Button>
      </div>
    </form>
  );
}
