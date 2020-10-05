<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h1>{{ quoteTitle }}</h1>
          <p>Parent to children</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  data: () => {
    return {
      quoteTitle: "Aslams Musings",
    };
  },
  components: {
    appQuote: Quote,
  },
};
</script>

<style scoped></style>
