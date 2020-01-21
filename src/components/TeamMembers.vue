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
import getTeamMembersQuery from "@/apollo/queries/get-team-members.graphql";
import selectTeamMemberMutation from "@/apollo/mutations/select-team-member.graphql";

export default {
  name: "team-members",

  components: {
    TeamMember
  },

  methods: {
    async selectTeamMember(index) {
      await this.$apollo.mutate({
        mutation: selectTeamMemberMutation,
        variables: { index }
      });
    }
  },

  apollo: {
    teamMembers: {
      query: getTeamMembersQuery
    }
  }
};
</script>

<style lang="scss" scoped>
.team-members > :not(:last-child) {
  margin-bottom: 8px;
}
</style>
