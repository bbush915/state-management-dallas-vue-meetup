<template>
  <input
    class="form-input"
    type="search"
    placeholder="Filter heroes..."
    v-model="filter"
  />
</template>

<script>
import * as Types from "@/store/types";

export default {
  name: "hero-table-search",

  computed: {
    filter: {
      get() {
        return this.$store.state.heroFilter;
      },

      set(value) {
        this.$store.commit(Types.SET_HERO_FILTER, value);
      }
    }
  }
};
</script>
