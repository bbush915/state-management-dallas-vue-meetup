<template>
  <div id="app">
    <DefaultLayout>
      <TeamBuilder />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import TeamBuilder from "@/pages/TeamBuilder";

export default {
  name: "app",

  components: {
    DefaultLayout,
    TeamBuilder
  }
};
</script>

<style lang="scss">
@import "@/styles";

#app {
  height: 100vh;
}
</style>
