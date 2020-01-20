<template>
  <div class="team-members">
    <TeamMember v-for="i in 5" :key="i" :hero="heroes[i - 1]" />
  </div>
</template>

<script>
import TeamMember from "./TeamMember";

export default {
  name: "team-members",

  components: {
    TeamMember
  },

  data() {
    return {
      heroes: [
        {
          name: "Alfonse",
          title: "Prince of Askr",
          uuid: "E89E50A69BA251FCB7C18EBCC767F0AF"
        },
        {
          name: "Sharena",
          title: "Princess of Askr",
          uuid: "F39640FD65D455ACA516A17B2A657D7E"
        },
        null,
        null,
        null
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.team-members > :not(:last-child) {
  margin-bottom: 8px;
}
</style>
