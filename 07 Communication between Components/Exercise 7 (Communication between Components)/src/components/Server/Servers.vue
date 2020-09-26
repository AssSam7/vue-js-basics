<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="server in servers"
        :key="server.id"
        :server="server"
      ></app-server>
    </ul>
  </div>
</template>

<script>
import { serverBus } from "../../main";
import Server from "./Server.vue";

export default {
  data: () => {
    return {
      servers: [
        { id: "1", name: "Oracle", status: "Normal" },
        { id: "2", name: "SQL Server", status: "Critical" },
        { id: "3", name: "MySQL", status: "Normal" },
        { id: "4", name: "MongoDB", status: "Critical" },
        { id: "5", name: "DynamoDB", status: "Normal" },
      ],
    };
  },
  components: {
    appServer: Server,
  },
  created() {
    serverBus.$on("deleteServer", (id) => {
      this.servers = this.servers.filter((server) => server.id != id);
    });
  },
};
</script>

<style></style>
