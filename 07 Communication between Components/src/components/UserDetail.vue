<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name: {{ myName }}</p>
    <p>User age: {{ userAge }}</p>
    <button @click="resetName">Reset name</button>
    <button @click="resetFunc">Reset name (Parent)</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myName: String,
    userAge: Number,
    resetFunc: Function,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Aslam";
      this.$emit("nameReset", this.myName);
    },
  },
  created() {
    eventBus.$on("ageEdit", (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
