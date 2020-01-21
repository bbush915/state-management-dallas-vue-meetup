import Vue from "vue";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import VueApollo, { ApolloProvider } from "vue-apollo";

Vue.use(VueApollo);

const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_API_URL}/graphql`
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

export const apolloProvider = new ApolloProvider({
  defaultClient: client
});
