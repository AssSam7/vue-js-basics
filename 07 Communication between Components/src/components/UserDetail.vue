<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name: {{ myName }}</p>
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: String,
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
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
