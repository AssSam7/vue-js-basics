<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h3 align="center">{{ text | reverseText }}</h3>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h3 align="center">{{ msg | countLength }}</h3>
        <hr />

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h3 align="center">{{ textRev }}</h3>
        <h3 align="center">{{ msgWithCount }}</h3>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAwareMixin } from "./lengthAwareMixin";

export default {
  mixins: [lengthAwareMixin],
  data() {
    return {
      text: "Hello Aslam",
      msg: "Obrigado!",
    };
  },
  filters: {
    reverseText(value) {
      return [...value].reverse().join("");
    },
  },
  computed: {
    textRev() {
      return [...this.text].reverse().join("");
    },
  },
};
</script>

<style></style>
