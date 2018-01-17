<template>
  <div>
    <h2 class="h2">{{ title }}</h2>
    <div class="box"
         v-for="card in cards"
         :key="card.id">
      <InputCard :card="card"/>
    </div>
  </div>
</template>

<script>
import InputCard from "../molecules/InputCard";

export default {
  name: "Cards",

  components: {
    InputCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
