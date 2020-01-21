import getTeamMembersQuery from "@/apollo/queries/get-team-members.graphql";

const resolvers = {
  Mutation: {
    addTeamMember(_, { hero }, { cache }) {
      const data = cache.readQuery({
        query: getTeamMembersQuery
      });

      const teamMembers = data.teamMembers;

      const index = teamMembers.findIndex(x => !x);
      teamMembers.splice(index, 1, hero);

      cache.writeQuery({
        query: getTeamMembersQuery,
        data: {
          __typename: "LocalState",
          teamMembers
        }
      });
    },

    removeTeamMember(_, { index }, { cache }) {
      const data = cache.readQuery({
        query: getTeamMembersQuery
      });

      const teamMembers = data.teamMembers;

      teamMembers.splice(index, 1, null);

      cache.writeQuery({
        query: getTeamMembersQuery,
        data: {
          __typename: "LocalState",
          teamMembers
        }
      });
    },

    selectTeamMember(_, { index }, { cache }) {
      cache.writeData({
        data: {
          __typename: "LocalState",
          selectedTeamMemberIndex: index
        }
      });
    },

    setHeroFilter(_, { value }, { cache }) {
      cache.writeData({
        data: {
          __typename: "LocalState",
          heroFilter: value
        }
      });
    }
  }
};

export default resolvers;
