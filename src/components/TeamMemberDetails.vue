<template>
  <div class="team-member-details card">
    <div v-if="hero" class="card-body">
      <div class="hero__image">
        <img :src="heroImageUrl" alt />
        <img class="weapon-type" :src="weaponTypeImageUrl" alt />
        <img class="movement-type" :src="movementTypeImageUrl" alt />
      </div>
      <div class="hero__information">
        <section>
          <div class="h3">{{ hero.name }}</div>
          <div class="text-gray">{{ hero.title }}</div>
        </section>
        <section>
          <blockquote>
            <p>{{ hero.description }}</p>
          </blockquote>
        </section>
        <section>
          <TeamMemberDetailsTable :hero="hero" />
        </section>
      </div>
    </div>
    <div v-else class="card-body empty">
      <i class="icon icon-4x icon-people" />
      <div class="empty-title h5">Empty</div>
      <div
        class="empty-subtitle"
      >Select a non-empty team member on the left to view detailed information.</div>
    </div>
  </div>
</template>

<script>
import TeamMemberDetailsTable from "./TeamMemberDetailsTable";
import * as Types from "@/store/types";
import { getAssetUrl } from "@/utilities/asset-helpers";

export default {
  name: "team-member-details",

  components: {
    TeamMemberDetailsTable
  },

  computed: {
    hero() {
      return this.$store.getters[Types.GET_SELECTED_TEAM_MEMBER];
    },

    heroImageUrl() {
      return getAssetUrl(`heroes/${this.hero.identifier}/Face.png`);
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

  &.empty {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
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
