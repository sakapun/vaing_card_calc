import heroes from "../assets/json/hero.json";

export default {
  state () {
    return {
      heroes: heroes.map(hero => ({
        ...hero,
        rareCardCount: 0,
        epicCardCount: 0,
        legendaryCardCount: 0
      })),
      selectedHeroName: "Adagio"
    };
  },

  getters: {
    selectedHero (state) {
      return state.heroes.find(hero => hero.name === state.selectedHeroName);
    }
  },

  mutations: {
    updateRareCount (state, value) {
      const hero = state.heroes.find(hero => hero.name === state.selectedHeroName);
      hero.rareCardCount = value;
    },

    updateEpicCount (state, value) {
      const hero = state.heroes.find(hero => hero.name === state.selectedHeroName);
      hero.epicCardCount = value;
    },

    updateLegendaryCount (state, value) {
      const hero = state.heroes.find(hero => hero.name === state.selectedHeroName);
      hero.legendaryCardCount = value;
    }
  }
};
