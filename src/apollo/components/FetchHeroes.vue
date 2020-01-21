<template>
  <ApolloQuery :query="require('@/apollo/queries/fetch-heroes.graphql')">
    <template v-slot="{}">
      <slot />
    </template>
  </ApolloQuery>
</template>

<script>
import { ApolloQuery } from "vue-apollo";

export default {
  name: "fetch-heroes",

  components: {
    ApolloQuery
  }
};
</script>
