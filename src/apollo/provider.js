import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "vue-apollo";

import schema from "./schema.graphql";
import resolvers from "./resolvers";

const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_API_URL}/graphql`
});

const cache = new InMemoryCache();

cache.writeData({
  data: {
    teamMembers: [null, null, null, null, null],
    selectedTeamMemberIndex: 0,
    heroFilter: null
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs: schema,
  resolvers
});

export const apolloProvider = new ApolloProvider({
  defaultClient: client
});
