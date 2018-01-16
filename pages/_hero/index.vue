<template>
  <section>
    <router-link to="/">
      homeへ
    </router-link>
    {{ hero }}
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data () {
  },
  asyncData (context) {
    return {
      heroName: context.params.hero
    };
  },
  computed: {
    ...mapState("heroes", ["heroes"]),
    hero () {
      return this.heroes.find(hr => hr.name === this.heroName);
    }
  },
  methods: {}
};
</script>

<style>
</style>
