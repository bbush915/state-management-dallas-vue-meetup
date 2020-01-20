<template>
  <div class="root">
    <AppHeader />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "default-layout",

  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
.root {
  background-image: url("~@/assets/gplay.png");
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container {
  flex-grow: 1;
  padding: 10px;
}
</style>
