<template>
  <div class="team-member card">
    <div v-if="hero" class="hero-summary">
      <img :src="heroAvatarUrl" width="75" height="75" />
      <div class="hero-summary__name">
        <div class="h5">{{ hero.name }}</div>
        <div class="text-gray">{{ hero.title }}</div>
      </div>
      <div>
        <button class="btn btn-error">
          <i class="icon icon-cross" />
        </button>
      </div>
    </div>
    <div v-else class="card-body empty">
      <i class="icon icon-3x icon-people" />
      <div>
        <div class="text-left h5">Available</div>
        <div>Use the table below to select a hero</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAssetUrl } from "@/utilities/asset-helpers";

export default {
  name: "team-member",

  props: {
    hero: {
      type: Object
    }
  },

  computed: {
    heroAvatarUrl() {
      if (!this.hero) {
        return undefined;
      }

      return getAssetUrl(`heroes/${this.hero.uuid}/Face_FC.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-member {
  cursor: pointer;
  user-select: none;

  :hover {
    background: $bg-color-dark;

    i {
      background: transparent;
    }
  }
}

.hero-summary {
  align-items: center;
  display: flex;
  height: 94px;
  padding: 10px;
}

.hero-summary__name {
  flex-grow: 1;
  margin: 0 15px;
}

.empty {
  align-items: center;
  display: flex;
  height: 94px;

  i {
    margin-right: 20px;
    user-select: none;
  }
}
</style>
