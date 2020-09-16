new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
    alertOnButton() {
      alert("Button is clicked!");
    },
    storeDataFromInput(e) {
      this.value = e.target.value;
    },
  },
});
