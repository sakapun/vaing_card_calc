<template>
  <section class="container">
    <div class="columns is-mobile is-multiline">
      <div v-for="hero in heroes"
           class="column is-half-mobile is-3-tablet is-2-desktop"
           :key="hero.name">
        <router-link to="/calc/" @click.native="commitChangeHero(hero)">
          <div class="box">
            <img :src="`/images/hero/${hero.name}.png`" :alt="hero.name" >
            <div class="hero-name">{{ hero.name }}</div>
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
    commitChangeHero (hero) {
      console.log(this.$store.commit);
      this.$store.commit("heroes/setHeroName", hero.name);
    }
  }
};
</script>

<style scoped>

</style>
