<template>
  <div class="hero-table card">
    <div class="card-body">
      <section>
        <h3>Available Heroes</h3>
        <p>Use the table below to add heroes to your party.</p>
      </section>
      <section>
        <input
          class="form-input mb-2"
          type="search"
          placeholder="Filter heroes..."
        />
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
      </section>
    </div>
  </div>
</template>

<script>
import HeroRow from "./HeroRow";

export default {
  name: "hero-table",

  components: {
    HeroRow
  },

  data() {
    return {
      heroes: [
        {
          name: "Alfonse",
          title: "Prince of Askr",
          uuid: "e89e50a69ba251fcb7c18ebcc767f0af",
          weaponType: {
            color: {
              name: "RED",
              displayValue: "Red"
            },
            weapon: {
              name: "SWORD",
              displayValue: "Sword"
            }
          },
          movementType: {
            name: "INFANTRY",
            displayValue: "Infantry"
          },
          baseHitPoints: 17,
          hitPointsGrowthRate: 55,
          baseAttack: 7,
          attackGrowthRate: 60,
          baseSpeed: 4,
          speedGrowthRate: 45,
          baseDefense: 6,
          defenseGrowthRate: 55,
          baseResistance: 3,
          resistanceGrowthRate: 40
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}
</style>
