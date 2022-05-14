import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
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
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Dashboard from "./Dashboard";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
});

export const App = () => (
  <ApolloProvider client={client}>
  <ChakraProvider theme={theme}>
 <Page>
   <Router>


 <Routes>
    <Route path="/" element={<Dashboard />} />
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          </Routes>
  </Router>
 </Page>



 
  </ChakraProvider>
  </ApolloProvider>
)
