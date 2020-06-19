<template>
  <div class="team-member card" :class="{ selected: isSelected }">
    <div v-if="hero" class="hero-summary">
      <img :src="heroAvatarUrl" width="75" height="75" />
      <div class="hero-summary__name">
        <div class="h5">{{ hero.name }}</div>
        <div class="text-gray">{{ hero.title }}</div>
      </div>
      <div>
        <button class="btn btn-error" @click="removeTeamMember">
          <i class="icon icon-cross" />
        </button>
      </div>
    </div>
    <div v-else class="card-body empty">
      <i class="icon icon-3x icon-people" />
      <div>
        <div class="text-left h5">Empty</div>
        <div>Add a hero to your team below.</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Types from "@/store/types";
import { getAssetUrl } from "@/utilities/asset-helpers";

export default {
  name: "team-member",

  props: {
    hero: {
      type: Object
    },

    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    isSelected() {
      return this.index === this.$store.state.selectedTeamMemberIndex;
    },

    heroAvatarUrl() {
      if (!this.hero) {
        return undefined;
      }

      return getAssetUrl(`heroes/${this.hero.id}/thumbnail.png`);
    }
  },

  methods: {
    removeTeamMember() {
      this.$store.commit(Types.REMOVE_TEAM_MEMBER, this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-member {
  border-width: 2px;
  cursor: pointer;
  user-select: none;

  :hover {
    background: $bg-color-dark;

    i {
      background: transparent;
    }
  }

  &.selected {
    border-color: $secondary-color;
  }
}

.hero-summary {
  align-items: center;
  display: flex;
  height: 93px;
  padding: 10px;
}

.hero-summary__name {
  flex-grow: 1;
  margin: 0 15px;
}

.empty {
  align-items: center;
  display: flex;
  height: 93px;

  i {
    margin-right: 20px;
    user-select: none;
  }
}
</style>
