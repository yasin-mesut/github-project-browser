<template>
  <div class="repos container">
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
  name: 'Repos',
  components: {
    List,
  },
  mixins: [
    computedMixin,
    watchMixin,
  ],
  data: () => ({
    items: null,
  }),
  computed: {
    title() {
      return this.$route.params.repo;
    },
  },
  methods: {
    resolveUrl() {
      return '';
    },
    fetchData() {
      axios.get(`/repos/${this.$route.params.name}/${this.$route.params.repo}/branches`).then((res) => {
        this.items = res.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
