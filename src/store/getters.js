import * as Types from "./types";

const getters = {
  [Types.GET_FILTERED_HEROES](state) {
    if (!state.heroFilter) {
      return state.heroes;
    }

    return state.heroes.filter(hero => {
      return hero.name.toLowerCase().includes(state.heroFilter.toLowerCase());
    });
  },

  [Types.GET_SELECTED_TEAM_MEMBER](state) {
    return state.teamMembers[state.selectedTeamMemberIndex];
  }
};

export default getters;
