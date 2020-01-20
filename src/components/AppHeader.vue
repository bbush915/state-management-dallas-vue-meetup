<template>
  <header class="navbar bg-primary">
    <div class="backdrop" />
    <section class="navbar-center">
      <a href="" class="navbar-brand text-light">
        <img class="mr-1" src="@/assets/logo.png" width="40" height="40" />
        Team Builder
      </a>
    </section>
  </header>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style lang="scss" scoped>
header {
  border-color: $secondary-color;
  border-style: solid;
  border-width: 2px 0;
  box-shadow: 0 0 6px 6px $dark-color;
  height: 52px;
  padding: 4px;
  width: 100%;
}

.backdrop {
  background-image: url("~@/assets/gplay.png");
  background-repeat: repeat;
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.navbar-brand {
  align-items: center;
  display: flex;
  z-index: 1;
}
</style>
