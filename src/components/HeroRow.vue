<template>
  <tr>
    <td>{{ hero.name }}</td>
    <td>{{ hero.title }}</td>
    <td>{{ movementType }}</td>
    <td>{{ weaponType }}</td>
    <td>{{ hitPoints }}</td>
    <td>{{ attack }}</td>
    <td>{{ speed }}</td>
    <td>{{ defense }}</td>
    <td>{{ resistance }}</td>
    <td>
      <button
        class="btn btn-success"
        :disabled="!canAddTeamMember"
        @click="addTeamMember"
      >
        Add to Team
      </button>
    </td>
  </tr>
</template>

<script>
import addTeamMemberMutation from "@/apollo/mutations/add-team-member.graphql";
import getTeamMembersQuery from "@/apollo/queries/get-team-members.graphql";
import Colors from "@/data/colors";
import MovementTypes from "@/data/movement-types";
import Weapons from "@/data/weapons";
import { getMaxLevelValue } from "@/utilities/statistic-helpers";

export default {
  name: "hero-row",

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },

  computed: {
    movementType() {
      return MovementTypes[this.hero.movementType];
    },

    weaponType() {
      const color = Colors[this.hero.color];
      const weapon = Weapons[this.hero.weapon];

      return `${color} ${weapon}`;
    },

    hitPoints() {
      return getMaxLevelValue(
        this.hero.baseHitPoints,
        this.hero.hitPointsGrowthRate
      );
    },

    attack() {
      return getMaxLevelValue(this.hero.baseAttack, this.hero.attackGrowthRate);
    },

    speed() {
      return getMaxLevelValue(this.hero.baseSpeed, this.hero.speedGrowthRate);
    },

    defense() {
      return getMaxLevelValue(
        this.hero.baseDefense,
        this.hero.defenseGrowthRate
      );
    },

    resistance() {
      return getMaxLevelValue(
        this.hero.baseResistance,
        this.hero.resistanceGrowthRate
      );
    },

    canAddTeamMember() {
      return this.teamMembers.some((x) => !x);
    },
  },

  methods: {
    async addTeamMember() {
      await this.$apollo.mutate({
        mutation: addTeamMemberMutation,
        variables: { hero: this.hero },
      });
    },
  },

  apollo: {
    teamMembers: {
      query: getTeamMembersQuery,
    },
  },
};
</script>
