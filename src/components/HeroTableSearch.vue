<template>
  <input
    class="form-input"
    type="search"
    placeholder="Filter heroes..."
    :value="filter"
    @input="setFilter($event.target.value)"
  />
</template>

<script>
import getHeroFilterQuery from "@/apollo/queries/get-hero-filter.graphql";
import setHeroFilterMutation from "@/apollo/mutations/set-hero-filter.graphql";

export default {
  name: "hero-table-search",

  methods: {
    async setFilter(value) {
      await this.$apollo.mutate({
        mutation: setHeroFilterMutation,
        variables: { value }
      });
    }
  },

  apollo: {
    filter: {
      query: getHeroFilterQuery,
      update: data => data.heroFilter
    }
  }
};
</script>
