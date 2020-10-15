<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server">
      <b>Server #{{ server.id }} Selected:</b> {{ server.name }} - Status:
      {{ server.status }}
    </p>
    <p v-else>No server is currently selected</p>
    <hr />
    <button @click="deleteServer" v-if="server">Delete the server</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data: () => {
    return {
      server: null,
    };
  },
  methods: {
    deleteServer() {
      serverBus.$emit("deleteServer", this.server.id);
      this.server = null;
    },
  },
  created() {
    serverBus.$on("serverSelected", (server) => {
      this.server = server;
    });
  },
};
</script>

<style></style>
