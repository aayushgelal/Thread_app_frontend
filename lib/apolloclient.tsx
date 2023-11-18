"use client";
import React, { createContext, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from "@apollo/client";
import { ReactNode } from "react";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include", // added this part
});
// Create a WebSocket link:
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5000/graphql",
  })
);

// Use the split function to send data to the correct link
// based on operation type
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    console.log(query,definition)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function Provider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
