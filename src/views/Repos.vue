<template>
  <div class="branches container">
    <div class="row">
      <div class="col-12">
        <h1>{{ title }}</h1>
        <List :items="items"
              :name-key="'name'"
              :url="resolveUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue';
import computedMixin from '@/mixins/computed';
import watchMixin from '@/mixins/watch';
import axios from 'axios';

export default {
  name: 'Branches',
  components: {
    List,
  },
  mixins: [
    computedMixin,
    watchMixin,
  ],
  data: () => ({
    items: null,
    title: 'Select a repository',
  }),
  methods: {
    resolveUrl(item) {
      return `/repos/${this.$route.params.name}/${item.name}/branches`;
    },
    fetchData() {
      axios.get(`/users/${this.$route.params.name}/repos`).then((res) => {
        this.items = res.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
