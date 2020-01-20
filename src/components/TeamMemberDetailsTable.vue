<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Statistic</th>
        <th>Value</th>
        <th>Percentile</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hit Points</td>
        <td>{{ hitPoints }}</td>
        <td>
          <div class="bar">
            <div
              class="bar-item bg-warning"
              :style="`width:${hitPointsPercentile}%`"
            >
              {{ hitPointsPercentile }}%
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{{ attack }}</td>
        <td>
          <div class="bar">
            <div
              class="bar-item bg-warning"
              :style="`width:${attackPercentile}%`"
            >
              {{ attackPercentile }}%
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{{ speed }}</td>
        <td>
          <div class="bar">
            <div
              class="bar-item bg-warning"
              :style="`width:${speedPercentile}%`"
            >
              {{ speedPercentile }}%
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{{ defense }}</td>
        <td>
          <div class="bar">
            <div
              class="bar-item bg-warning"
              :style="`width:${defensePercentile}%`"
            >
              {{ defensePercentile }}%
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Resistance</td>
        <td>{{ resistance }}</td>
        <td>
          <div class="bar">
            <div
              class="bar-item bg-warning"
              :style="`width:${resistancePercentile}%`"
            >
              {{ resistancePercentile }}%
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getMaxLevelValue } from "@/utilities/statistic-helpers";

const MAX_HIT_POINTS = 58;
const MAX_ATTACK = 39;
const MAX_SPEED = 40;
const MAX_DEFENSE = 40;
const MAX_RESISTANCE = 39;

export default {
  name: "team-member-details-table",

  props: {
    hero: {
      type: Object
    }
  },

  computed: {
    hitPoints() {
      return getMaxLevelValue(
        this.hero.baseHitPoints,
        this.hero.hitPointsGrowthRate
      );
    },

    hitPointsPercentile() {
      return Math.round((this.hitPoints / MAX_HIT_POINTS) * 100);
    },

    attack() {
      return getMaxLevelValue(this.hero.baseAttack, this.hero.attackGrowthRate);
    },

    attackPercentile() {
      return Math.round((this.attack / MAX_ATTACK) * 100);
    },

    speed() {
      return getMaxLevelValue(this.hero.baseSpeed, this.hero.speedGrowthRate);
    },

    speedPercentile() {
      return Math.round((this.speed / MAX_SPEED) * 100);
    },

    defense() {
      return getMaxLevelValue(
        this.hero.baseDefense,
        this.hero.defenseGrowthRate
      );
    },

    defensePercentile() {
      return Math.round((this.defense / MAX_DEFENSE) * 100);
    },

    resistance() {
      return getMaxLevelValue(
        this.hero.baseResistance,
        this.hero.resistanceGrowthRate
      );
    },

    resistancePercentile() {
      return Math.round((this.resistance / MAX_RESISTANCE) * 100);
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}
</style>
