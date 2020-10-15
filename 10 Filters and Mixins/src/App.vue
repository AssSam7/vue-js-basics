<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr />
        <input
          type="text"
          placeholder="Type a fruit name"
          v-model="filterText"
        />
        <ul v-if="filterText">
          <li v-for="(fruit, index) in filteredFruits" :key="index">
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello World!",
      fruits: ["Apple", "Banana", "Mango", "Papaya", "Orange"],
      filterText: "",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((el) => el.includes(this.filterText));
    },
  },
};
</script>

<style></style>
