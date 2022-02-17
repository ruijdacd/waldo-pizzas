import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos/pizza",
  cache: new InMemoryCache(),
});
