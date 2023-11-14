"use client";
import React, { createContext, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { ReactNode } from "react";

const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include", // added this part
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function Provider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
