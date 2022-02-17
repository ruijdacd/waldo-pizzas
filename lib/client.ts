import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://core-graphql.dev.waldo.photos",
  cache: new InMemoryCache()
});
