import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import fetchHeroesQuery from "./queries/fetch-heroes.graphql";
import * as Types from "./types";

const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_API_URL}/graphql`
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

  defaultOptions: {
    query: {
      fetchPolicy: "no-cache"
    }
  }
});

const actions = {
  async [Types.FETCH_HEROES]({ commit }) {
    const response = await client.query({
      query: fetchHeroesQuery
    });

    const heroes = response.data.heroes;

    heroes.sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
      return nameComparison ? nameComparison : a.title.localeCompare(b.title);
    });

    commit(Types.SET_HEROES, heroes);
  }
};

export default actions;
