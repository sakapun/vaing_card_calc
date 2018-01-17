<template>
  <div>
    <div class="tabs is-toggle is-small">
      <ul>
        <li :class="{'is-active': isCommonVisible}">
          <a @click="updateVisible('isCommonVisible')"><span>コモン</span></a>
        </li>
        <li :class="{'is-active': isRareVisible}">
          <a @click="updateVisible('isRareVisible')"><span>レア</span></a>
        </li>
        <li :class="{'is-active': isEpicVisible}">
          <a @click="updateVisible('isEpicVisible')"><span>エピック</span></a>
        </li>
        <li :class="{'is-active': isLegendaryVisible}">
          <a @click="updateVisible('isLegendaryVisible')"><span>レジェンダリー</span></a>
        </li>
      </ul>
    </div>
    <div v-if="isCommonVisible">
      <InputCardList title="コモン" :cards="commonCards"/>
    </div>
    <div v-if="isRareVisible">
      <InputCardList title="レア" :cards="rareCards"/>
    </div>
    <div v-if="isEpicVisible">
      <InputCardList title="エピック" :cards="epicCards"/>
    </div>
    <div v-if="isLegendaryVisible">
      <InputCardList title="レジェンダリー" :cards="legendaryCards"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InputCardList from "../components/organisms/InputCardList";

export default {
  name: "Cards",
  components: {
    InputCardList
  },
  data () {
    return {
      isCommonVisible: true,
      isRareVisible: true,
      isEpicVisible: true,
      isLegendaryVisible: true
    };
  },
  computed: mapGetters("cards", [
    "commonCards",
    "rareCards",
    "epicCards",
    "legendaryCards"
  ]),
  methods: {
    ...mapMutations("cards", ["updateCount"]),
    changeCount ({target}, id) {
      this.updateCount({id, data: target.value});
    },

    updateVisible (key) {
      this[key] = !this[key];
    }
  }
};
</script>

<style scoped>

</style>
