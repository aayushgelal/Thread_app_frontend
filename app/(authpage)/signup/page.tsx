"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

type Inputs = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};
const loginMutation = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $username: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      username: $username
    )
  }
`;

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [showLoggingInAlert, setShowLoggingInAlert] = useState(false);

  const [createUser, { data, loading, error }] = useMutation(loginMutation);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setShowLoggingInAlert(true);
    createUser({
      variables: {
        email: data.email,
        password: data.password,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    }).then(() => {
      setShowLoggingInAlert(false);
    });

    if (error) return `Submission error! ${error.message}`;
  };

  return (
    <div className=" w-96 space-y-3 ">
      <h1>Sign Up on Threads</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <div className="flex space-x-3 justify-between">
          <Input placeholder="First Name " {...register("firstName")} />
          <Input placeholder="Last Name" {...register("lastName")} />
        </div>

        <Input placeholder="Phone or Email " {...register("email")} />
        <Input placeholder="Username" {...register("username")} />
        <Input placeholder="Password " {...register("password")} />
        {showLoggingInAlert ? (
          <Button type="button" disabled>
            Signing up...
          </Button>
        ) : (
          <Button type="submit">Signup</Button>
        )}
      </form>
    </div>
  );
}
