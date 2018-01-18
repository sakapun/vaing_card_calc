<template>
  <section>
    <h1 class="h1">カード入力</h1>
    <div class="field">
      <label class="label">レア</label>
      <div class="control">
        <input class="input"
               type="number"
               :value="rareCardCount"
               @input="updateRare"
               placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">エピック</label>
      <div class="control">
        <input class="input"
               type="number"
               :value="epicCardCount"
               @input="updateEpic"
               placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">レジェンダリー</label>
      <div class="control">
        <input class="input"
               type="number"
               :value="legendaryCardCount"
               @input="updateLegendary"
               placeholder="Text input">
      </div>
    </div>
    <div class="box">
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
export default {
  name: "Calc",
  data () {
    return {
      rareCardCount: 0,
      epicCardCount: 0,
      legendaryCardCount: 0,
      rareCardPrice: 30,
      epicCardPrice: 120,
      legendaryCardPrice: 360,
      rareSkinPrice: 1000,
      epicSkinPrice: 2500,
      legendarySkinPrice: 5000
    };
  },
  computed: {
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
  methods: {
    updateRare ({target}) {
      this.rareCardCount = Number(target.value);
    },
    updateEpic ({target}) {
      this.epicCardCount = Number(target.value);
    },
    updateLegendary ({target}) {
      this.legendaryCardCount = Number(target.value);
    }
  }
};
</script>

<style scoped>

</style>
