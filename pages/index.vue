<template>
  <section class="container">
    <div class="columns is-mobile is-multiline">
      <div v-for="hero in heroes"
           class="column is-one-third-mobile is-3-tablet is-2-desktop"
           :key="hero.name">
        <router-link :to="`/${hero.name}/`">
          <div class="box">
            <img :src="getHeroImagePath(hero)" :alt="hero.name" >
            <div class="hero-name">{{ hero.name }}</div>
            <div>{{ hero.gain }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
  },
  computed: {
    ...mapState("heroes", [
      "heroes"
    ])
  },
  methods: {
    getHeroImagePath (hero) {
      return `images/hero/${hero.name.toLowerCase()}.png`;
    }
  }
};
</script>

<style>
</style>
