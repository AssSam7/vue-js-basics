new Vue({
  el: "#exercise",
  data: {
    highlight: false,
    classCSS: "highlight",
    classCSS2: "",
    applyCSS2: false,
    progess: 10,
  },
  methods: {
    startEffect: function () {
      setTimeout(() => {
        this.highlight = !this.highlight;
      }, 1500);
    },
    startProgress() {
      setTimeout(() => {
        this.progess *= 10;
      }, 1000);
    },
  },
  computed: {
    alterBetweenHighlightShrink() {
      return {
        highlight: this.highlight,
        shrink: !this.highlight,
      };
    },
    progressBar() {
      return {
        width: this.progess,
      };
    },
  },
});
