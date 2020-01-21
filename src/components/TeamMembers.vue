<template>
  <div class="team-members">
    <TeamMember
      v-for="i in 5"
      :key="i"
      :hero="teamMembers[i - 1]"
      :index="i - 1"
      @click.native="selectTeamMember(i - 1)"
    />
  </div>
</template>

<script>
import TeamMember from "./TeamMember";
import * as Types from "@/store/types";

export default {
  name: "team-members",

  components: {
    TeamMember
  },

  computed: {
    teamMembers() {
      return this.$store.state.teamMembers;
    }
  },

  methods: {
    selectTeamMember(index) {
      this.$store.commit(Types.SELECT_TEAM_MEMBER, index);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-members > :not(:last-child) {
  margin-bottom: 8px;
}
</style>
