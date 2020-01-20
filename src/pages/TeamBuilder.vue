<template>
  <div class="team-builder">
    <div class="team-member-information">
      <TeamMembers class="team-members" />
      <TeamMemberDetails class="team-member-details" />
    </div>
    <HeroTable class="hero-table" />
  </div>
</template>

<script>
import HeroTable from "@/components/HeroTable";
import TeamMemberDetails from "@/components/TeamMemberDetails";
import TeamMembers from "@/components/TeamMembers";

export default {
  name: "team-builder",

  components: {
    HeroTable,
    TeamMemberDetails,
    TeamMembers
  }
};
</script>

<style lang="scss" scoped>
.team-builder {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
}

.team-member-information {
  display: flex;
  margin-bottom: 20px;
}

.team-members {
  flex: 1;
  margin-right: 20px;
}

.team-member-details {
  flex: 3;
}

.hero-table {
  flex-grow: 1;
}
</style>
