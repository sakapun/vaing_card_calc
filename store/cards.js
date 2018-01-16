class Card {
  constructor (id, name, rarity) {
    this.id = id;
    this.name = name;
    this.rarity = rarity;
    this.setEssense(rarity);
    this.count = 0;
  }

  setEssense (rarity) {
    let createCost = 0;
    let destructureCost = 0;
    switch (rarity) {
      case 0:
        createCost = 6;
        destructureCost = 1;
        break;
      case 1:
        createCost = 30;
        destructureCost = 6;
        break;
      case 2:
        createCost = 120;
        destructureCost = 30;
        break;
      case 3:
        createCost = 360;
        destructureCost = 120;
        break;
    }
    this.createCost = createCost;
    this.destructureCost = destructureCost;
  }
}

const getDefaultCards = () => {
  return [
    new Card(1, "闇の鉱石", 0),
    new Card(2, "輝く鉱石", 0),
    new Card(3, "グリモアの書", 0),
    new Card(4, "エーテル爆発の安全弁", 0),
    new Card(5, "ミニオンの耳", 0),
    new Card(6, "奇妙なまでに黒い物質", 0),
    new Card(7, "ベイパーウェア", 0),
    new Card(8, "呪いの印", 0)
  ];
};

export default {
  state () {
    return getDefaultCards();
  },

  mutations: {
    updateCount (state, {id, data}) {
      const thisCard = state.find(c => c.id === id);
      thisCard.count = Number(data);
    }
  },

  getters: {
    commonCards (state) {
      return state.filter(card => card.rarity === 0);
    }
  }
};
