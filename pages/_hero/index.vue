<template>
  <section>
    <h2>{{ hero.name }}</h2>
    <pre>
      {{ hero }}
    </pre>
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
