<template>
  <section>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="`/images/hero/${selectedHero.name}.png`">
        </p>
      </figure>
      <div class="media-content">
        <div>
          <strong class="is-size-4">{{ selectedHero.name }}</strong>
        </div>
      </div>
    </article>
    <div class="hero-select-button">
      <router-link to="/hero-select">
        <button class="button">ヒーローを変更する</button>
      </router-link>
    </div>

    <div class="content-block">
      <h2 class="title">カード枚数入力</h2>

      <label class="label">レア</label>
      <div class="field is-4 has-addons">
        <div class="control">
          <button class="button" @click="updateRareCount(rareCardCount - 1)">－</button>
        </div>
        <div class="control">
          <input class="input"
                 type="number"
                 v-model.number="rareCardCount">
        </div>
        <div class="control">
          <button class="button" @click="updateRareCount(rareCardCount + 1)">＋</button>
        </div>
      </div>

      <label class="label">エピック</label>
      <div class="field is-4 has-addons">
        <div class="control">
          <button class="button" @click="updateEpicCount(epicCardCount - 1)">－</button>
        </div>
        <div class="control">
          <input class="input"
                 type="number"
                 v-model.number="epicCardCount">
        </div>
        <div class="control">
          <button class="button" @click="updateEpicCount(epicCardCount + 1)">＋</button>
        </div>
      </div>

      <label class="label">レジェンダリー</label>
      <div class="field is-4 has-addons">
        <div class="control">
          <button class="button" @click="updateLegendaryCount(legendaryCardCount - 1)">－</button>
        </div>
        <div class="control">
          <input class="input"
                 type="number"
                 v-model.number="legendaryCardCount">
        </div>
        <div class="control">
          <button class="button" @click="updateLegendaryCount(legendaryCardCount + 1)">＋</button>
        </div>
      </div>
    </div>

    <div class="content-block">
      <h1 class="title">必要エッセンス</h1>
      <div class="columns">
        <div class="column is-one-third">
          <div>レアスキン</div>
          <div>
            <span>{{ rareCalc }}</span>
          </div>

        </div>
        <div class="column is-one-third">
          <div>エピックスキン</div>
          <div>
            <span>{{ epicCalc }}</span>
          </div>
        </div>
        <div class="column is-one-third">
          <div>レジェンダリースキン</div>
          <div>
            <span>{{ legendaryCalc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Calc",
  data () {
    return {
      rareCardPrice: 30,
      epicCardPrice: 120,
      legendaryCardPrice: 360,
      rareSkinPrice: 1000,
      epicSkinPrice: 2500,
      legendarySkinPrice: 5000
    };
  },
  computed: {
    ...mapGetters("heroes", [
      "selectedHero"
    ]),
    rareCardCount: {
      get () {
        return this.selectedHero.rareCardCount;
      },
      set (value) {
        this.updateRareCount(value);
      }
    },
    epicCardCount: {
      get () {
        return this.selectedHero.epicCardCount;
      },
      set (value) {
        this.updateEpicCount(value);
      }
    },
    legendaryCardCount: {
      get () {
        return this.selectedHero.legendaryCardCount;
      },
      set (value) {
        this.updateLegendaryCount(value);
      }
    },

    rareEssence () { return this.rareCardCount * this.rareCardPrice; },
    epicEssence () { return this.epicCardCount * this.epicCardPrice; },
    legendaryEssence () { return this.legendaryCardCount * this.legendaryCardPrice; },
    rareCalc () {
      const essence = this.rareEssence;
      const need = this.rareSkinPrice * 0.33;
      if ((need - essence) <= 0) {
        return `満たしています(${essence})`;
      }
      return need - essence;
    },
    epicCalc () {
      const essence = this.rareEssence + this.epicEssence;
      const need = this.epicSkinPrice * 0.33;
      if ((need - essence) <= 0) {
        return `満たしています(${essence})`;
      }
      return need - essence;
    },
    legendaryCalc () {
      const essence = this.rareEssence + this.epicEssence + this.legendaryEssence;
      const need = this.legendarySkinPrice * 0.33;
      if ((need - essence) <= 0) {
        return `満たしています(${essence})`;
      }
      return need - essence;
    }
  },
  methods: mapMutations("heroes", [
    "updateRareCount",
    "updateEpicCount",
    "updateLegendaryCount"
  ])
};
</script>

<style scoped>
.hero-select-button {
  margin-top: 1rem;
}

.content-block {
  margin-top: 2rem;
}
</style>
