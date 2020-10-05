<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">Parent to children</p>
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

<style scoped>
h1 {
  color: rebeccapurple;
}

p {
  font-size: 2rem;
}
</style>
