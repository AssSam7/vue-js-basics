<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="loadServerDetails"
  >
    Server #{{ server.id }}
  </li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: ["server"],
  methods: {
    loadServerDetails() {
      serverBus.$emit("serverSelected", this.server);
    },
  },
};
</script>

<style>
li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
