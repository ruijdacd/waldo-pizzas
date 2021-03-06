// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

import { ApolloProvider } from "@apollo/client";

import { client } from "@/lib/client";

import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
