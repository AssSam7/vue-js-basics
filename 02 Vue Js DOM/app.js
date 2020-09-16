new Vue({
  el: "#app",
  data: {
    name: "Aslam MD",
    title: "Hello",
    link: "https://www.google.com",
    linkHTML: `<a href="https://www.linkedin.com">Linkedin</a>`,
    counter: 0,
    counter2: 0,
    x: 0,
    y: 0,
  },
  computed: {
    output() {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    },
  },
  watch: {
    counter: function (value) {
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    },
  },
  methods: {
    displayTitle() {
      this.title = "Hello World";
      return `${this.title}`;
    },

    incrementCounter(step, e) {
      this.counter += step;
      console.log(e.target);
    },

    updateCoords(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alert() {
      alert("Hello World!");
    },
  },
});
