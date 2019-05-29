<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>{{ message }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    message: 'Start by typing in a user or organization name ...',
  }),
};
</script>

<style scoped lang="scss">
  h1 {
    padding-top: 1em;
  }
</style>
