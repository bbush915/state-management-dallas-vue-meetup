<template>
  <FetchHeroes>
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
              <HeroRow
                v-for="hero in filteredHeroes"
                :key="hero.id"
                :hero="hero"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </FetchHeroes>
</template>

<script>
import HeroRow from "./HeroRow";
import FetchHeroes from "@/apollo/components/FetchHeroes";
import getHeroFilterQuery from "@/apollo/queries/get-hero-filter.graphql";
import getHeroesQuery from "@/apollo/queries/get-heroes.graphql";
import HeroTableSearch from "@/components/HeroTableSearch";

export default {
  name: "hero-table",

  components: {
    FetchHeroes,
    HeroRow,
    HeroTableSearch
  },

  data() {
    return {
      heroes: []
    };
  },

  computed: {
    filteredHeroes() {
      if (!this.filter) {
        return this.heroes;
      }

      return this.heroes.filter(hero => {
        return hero.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  },

  apollo: {
    filter: {
      query: getHeroFilterQuery,
      update: data => data.heroFilter
    },

    heroes: {
      query: getHeroesQuery,
      update: data => {
        const heroes = data.heroes;

        heroes.sort((a, b) => {
          const nameComparison = a.name.localeCompare(b.name);
          return nameComparison
            ? nameComparison
            : a.title.localeCompare(b.title);
        });

        return heroes;
      }
    }
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
