import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Page from "./Page";
import HeaderGroup from "./HeaderGroup";
import Films from "./Films";
import TvShows from "./TvShows";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
});

export const App = () => (
  <ApolloProvider client={client}>
  <ChakraProvider theme={theme}>
  <Page> <HeaderGroup/> <Films /> <TvShows /> </Page>
  </ChakraProvider>
  </ApolloProvider>
)
