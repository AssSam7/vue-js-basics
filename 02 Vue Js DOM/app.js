new Vue({
  el: "#app",
  data: {
    name: "Aslam Mohammed",
    title: "Hello",
    link: "https://www.google.com",
    linkHTML: `<a href="https://www.linkedin.com">Linkedin</a>`,
    counter: 0,
    x: 0,
    y: 0,
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
  },
});
