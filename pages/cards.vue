<template>
  <div>
    <h2 class="h2">コモン</h2>
    <div class="box"
         v-for="card in commonCards"
         :key="card.id">
      <div>
        {{ card.name }}
        <input type="number"
               class="input"
               :value="card.count"
               @input="changeCount($event, card.id)">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Cards",
  computed: mapGetters("cards", ["commonCards"]),
  methods: {
    changeCount ({target}, id) {
      this.updateCount({id, data: target.value});
    },
    ...mapMutations("cards", ["updateCount"])
  }
};
</script>

<style scoped>

</style>
