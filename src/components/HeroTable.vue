<template>
  <div class="hero-table card">
    <div class="card-body">
      <HeroTableSearch class="mb-2" />
      <div class="table-wrapper">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Movement</th>
              <th>Weapon</th>
              <th>Hit Points</th>
              <th>Attack</th>
              <th>Speed</th>
              <th>Defense</th>
              <th>Resistance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <HeroRow v-for="hero in heroes" :key="hero.id" :hero="hero" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import HeroRow from "./HeroRow";
import HeroTableSearch from "./HeroTableSearch";
import * as Types from "@/store/types";

export default {
  name: "hero-table",

  components: {
    HeroRow,
    HeroTableSearch
  },

  computed: {
    heroes() {
      return this.$store.getters[Types.GET_FILTERED_HEROES];
    }
  },

  async created() {
    await this.$store.dispatch(Types.FETCH_HEROES);
  }
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  height: 350px;
  overflow: auto;
}

table {
  table-layout: fixed;
}
</style>
