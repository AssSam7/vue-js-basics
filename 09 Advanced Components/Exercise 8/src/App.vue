<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="loadComponent = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="loadComponent = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="loadComponent = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <component :is="loadComponent">
          <h1 v-if="loadComponent == 'appBlue'">Hello, Blue</h1>
          <h1 v-if="loadComponent == 'appGreen'">Hello, Green</h1>
          <h1 v-if="loadComponent == 'appRed'">Hello, Red</h1>
        </component>
        <!-- <app-blue>
          <h1>Hello, Blue</h1>
        </app-blue>
        <app-green>
          <h1>Hello, Green</h1>
        </app-green>
        <app-red>
          <h1>Hello, Red</h1>
        </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: () => {
    return {
      loadComponent: "",
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style>
</style>
