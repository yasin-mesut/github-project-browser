<template>
  <div class="list" v-if="items">
    <ul class="list__items">
      <li :key="item.id"
          v-for="item in items"
          class="list__item"
      >
        <router-link :to="url(item)">
          <img class="list__avatar"
               :src="item.avatar_url"
               :alt="`${item.type} Avatar`"
               v-if="item.avatar_url"
          >
          <strong>
            {{ item[nameKey] }}
          </strong>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: [
    'items',
    'nameKey',
    'url',
  ],
};
</script>

<style scoped lang="scss">
  @import '@/styles/utils/_vars.scss';

  .list {
    z-index: 1;

    &__items {
      padding: 0 2em 2em;
      max-height: 80vh;
      border: 1px solid $background;
      border-radius: 0 0 3px 3px;
      list-style: none;
      overflow: auto;
    }

    &__item {
      padding: 0.5em;
      border-bottom: 1px solid $almostTransparent;

      img {
        border-radius: 50%;
        margin-right: 1em;
      }

      a {
        display: block;
      }
    }

    &__avatar {
      width: 5em;
    }
  }
</style>
