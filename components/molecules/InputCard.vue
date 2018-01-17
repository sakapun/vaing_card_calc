<template>
  <div>
    {{ card.name }}
    <input type="number"
           class="input"
           :value="card.count"
           @input="changeCount($event,)">
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "InputCard",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeCount ({target}) {
      this.updateCount({id: this.card.id, data: target.value});
    },
    ...mapMutations("cards", ["updateCount"])
  }
};
</script>

<style scoped>

</style>
