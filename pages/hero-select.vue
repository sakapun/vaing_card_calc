<template>
  <section class="container">
    <router-link to="/">
      戻る
    </router-link>
    <div class="content-block">
      <div class="columns is-mobile is-multiline">
        <div v-for="hero in heroes"
             class="column is-4-mobile is-3-tablet is-2-desktop"
             :key="hero.name">
          <router-link to="/" @click.native="commitChangeHero(hero)">
            <div class="box" :class="{'is-selected': selectedHeroName === hero.name}">
              <img :src="`/images/hero/${hero.name}.png`" :alt="hero.name" >
              <div class="hero-name">{{ hero.name }}</div>
            </div>
          </router-link>
        </div>
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
      "heroes",
      "selectedHeroName"
    ])
  },
  methods: {
    commitChangeHero (hero) {
      this.$store.commit("heroes/setHeroName", hero.name);
    }
  }
};
</script>

<style scoped>
.content-block {
  margin-top: 2rem;
}

.box.is-selected {
  background: #a2a2a2;
  color: white;
}
</style>
