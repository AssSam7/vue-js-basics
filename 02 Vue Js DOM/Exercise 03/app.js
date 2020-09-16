new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
    result() {
      return this.value != 37 ? "not there yet" : "Done";
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
  methods: {},
});
