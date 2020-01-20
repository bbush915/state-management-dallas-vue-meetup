<template>
  <div class="team-member-details card">
    <div class="card-body">
      <div class="hero__image">
        <img :src="heroImageUrl" alt="" />
        <img class="weapon-type" :src="weaponTypeImageUrl" alt="" />
        <img class="movement-type" :src="movementTypeImageUrl" alt="" />
      </div>
      <div class="hero__information">
        <section>
          <div class="h3">{{ hero.name }}</div>
          <div class="text-gray">{{ hero.title }}</div>
        </section>
        <section>
          <blockquote>
            <p>
              A prince of Askr and member of the Order of Heroes. Kind and
              serious, and eager to maintain peace.
            </p>
          </blockquote>
        </section>
        <section>
          <TeamMemberDetailsTable :hero="hero" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberDetailsTable from "./TeamMemberDetailsTable";
import { getAssetUrl } from "@/utilities/asset-helpers";

export default {
  name: "team-member-details",

  components: {
    TeamMemberDetailsTable
  },

  data() {
    return {
      hero: {
        name: "Alfonse",
        title: "Prince of Askr",
        uuid: "e89e50a69ba251fcb7c18ebcc767f0af",
        weaponType: {
          color: {
            name: "RED"
          },
          weapon: {
            name: "SWORD"
          }
        },
        movementType: {
          name: "INFANTRY"
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
    };
  },

  computed: {
    heroImageUrl() {
      return getAssetUrl(`heroes/${this.hero.uuid}/Face.png`);
    },

    weaponTypeImageUrl() {
      const color = this.hero.weaponType.color.name;
      const weapon = this.hero.weaponType.weapon.name;

      return getAssetUrl(`unit-builder/WeaponType_${color}_${weapon}.png`);
    },

    movementTypeImageUrl() {
      const movementType = this.hero.movementType.name;

      return getAssetUrl(`unit-builder/MovementType_${movementType}.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-member-details > div {
  display: flex;
  flex-direction: row;
}

.hero__image {
  align-items: center;
  display: flex;
  position: relative;

  img {
    height: 475px;
  }

  .weapon-type {
    height: 48px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 48px;
  }

  .movement-type {
    height: 42px;
    left: 3px;
    position: absolute;
    top: 60px;
    width: 42px;
  }
}

.hero__information {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}
</style>
