import "../styles/globals.css";
import { nhost } from "./nhost";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../UserProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NhostNextProvider } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>{/* ... */}</NhostApolloProvider>
      <ApolloProvider client={client}>
        <UserProvider>
          <Component {...pageProps} />
          <Toaster />
        </UserProvider>
      </ApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
