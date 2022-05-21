import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import Page from "./Page";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login/Login"
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://uhe9yze9hg.execute-api.eu-west-2.amazonaws.com/production/graphql"
});


export const App = () => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <Page>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
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

