<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Show Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Show Author</button>
        <button @click="selectedComponent = 'appNew'">Show New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
          <p>Parent to children</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: () => {
    return {
      quoteTitle: "Aslams Musings",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
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
