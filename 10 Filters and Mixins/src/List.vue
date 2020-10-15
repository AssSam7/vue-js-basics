<template>
  <div>
    <input type="text" placeholder="Type a fruit name" v-model="filterText" />
    <ul v-if="filterText">
      <li v-for="(fruit, index) in filteredFruits" :key="index">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin],
};
</script>
