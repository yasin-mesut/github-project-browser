<template>
  <div class="search-field">
    <label class="search-field__label"
           for="search-field"
           aria-label="Search Field"
    >
      Search
    </label>
    <input id="search-field"
           class="search-field__input"
           placeholder="Search ..."
           aria-label="Input field for search query"
           v-model="searchQuery"
           @input="updateQuery"
           @keydown.esc="resetSearch"
    >
    <button class="search-field__reset-button"
            @click="resetSearch"
    >
      x
    </button>
    <List class="search-field__results"
          :items="items"
          :name-key="'login'"
          :url="resolveUrl"
    />
  </div>
</template>

<script>
  import List from '@/components/List.vue';
  import computedMixin from '@/mixins/computed';
  import watchMixin from '@/mixins/watch';
  import mountedMixin from '@/mixins/mounted';
  import axios from 'axios';
  import { debounce } from 'lodash';

  export default {
    name: 'SearchField',
    components: {
      List,
    },
    data: () => ({
      searchQuery: '',
      items: null,
    }),
    mixins: [
      computedMixin,
      watchMixin,
      mountedMixin,
    ],
    methods: {
      // eslint-disable-next-line
      updateQuery: debounce(function () {
        this.$router.push({
          path: '',
          query: { search: this.searchQuery },
        });
      }, 500),
      resetSearch() {
        this.searchQuery = '';
        this.updateQuery();
      },
      fetchData() {
        if (this.query) {
          axios.get(`/search/users?q=${ this.query }`).then((res) => {
            this.items = res.data.items;
          });
        } else {
          this.items = null;
        }
      },
      resolveUrl(item) {
        return `/users/${ item.login }`;
      },
    },
    created() {
      this.searchQuery = this.$route.query.search;
    },
  };
</script>

<style scoped lang="scss">
  @import '@/styles/utils/_vars.scss';

  .search-field {

    &__label {
      display: none;
    }

    &__input {
      width: 100%;
      padding: 0.25em;
      color: $textSecondary;
      background-color: $semiTransparent;
      border: none;
      border-radius: 3px;

      &:focus {
        background-color: $almostTransparent;
        outline: none;
      }
    }

    &__results {
      position: absolute;
      width: 100%;
      top: 150%;
      left: 0;
      background-color: $background;
    }

    &__reset-button {
      position: absolute;
      height: 100%;
      right: 0.9em;
      padding: 0 0.5em;
      top: 50%;
      background-color: $danger;
      border: none;
      cursor: pointer;
      transform: translateY(-50%);

      &:hover {
        background-color: $dangerDark;
      }
    }
  }
</style>
