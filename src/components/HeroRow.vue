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
import { getMaxLevelValue } from "@/utilities/statistic-helpers";

export default {
  name: "hero-row",

  props: {
    hero: {
      type: Object,
      required: true
    }
  },

  computed: {
    movementType() {
      return this.hero.movementType.displayValue;
    },

    weaponType() {
      const color = this.hero.weaponType.color.displayValue;
      const weapon = this.hero.weaponType.weapon.displayValue;

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
      return false;
    }
  },

  methods: {
    addTeamMember() {}
  }
};
</script>
