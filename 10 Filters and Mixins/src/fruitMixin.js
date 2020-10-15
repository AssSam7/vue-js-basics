export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Papaya", "Orange"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((el) => el.includes(this.filterText));
    },
  },
};
