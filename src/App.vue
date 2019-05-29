<template>
  <div id="app">
    <nav id="nav" class="container-fluid">
      <div class="col-12">
        <router-link to="/">
          GitHub project browser
        </router-link>
      </div>
      <div class="col-12">
        <SearchField />
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue';

export default {
  components: {
    SearchField,
  },
};
</script>

<style lang="scss">
  @import '@/styles/utils/_vars.scss';

  nav {
    color: $textSecondary;
    background-color: $background;
    padding: 1em 2em;
    font-weight: bold;

    a {
      color: $textSecondary;

      &:hover {
        color: $almostTransparent;
      }
    }
  }
</style>
