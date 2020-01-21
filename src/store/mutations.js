import * as Types from "./types";

const mutations = {
  [Types.ADD_TEAM_MEMBER](state, payload) {
    const index = state.teamMembers.findIndex(x => !x);
    state.teamMembers.splice(index, 1, payload);
  },

  [Types.REMOVE_TEAM_MEMBER](state, payload) {
    const index = state.teamMembers.findIndex(x => x?.id === payload.id);
    state.teamMembers.splice(index, 1, null);
  },

  [Types.SELECT_TEAM_MEMBER](state, value) {
    state.selectedTeamMemberIndex = value;
  },

  [Types.SET_HERO_FILTER](state, value) {
    state.heroFilter = value;
  },

  [Types.SET_HEROES](state, payload) {
    state.heroes = payload;
  }
};

export default mutations;
