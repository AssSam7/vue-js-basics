new Vue({
  el: "#exercise",
  data: {
    name: "Aslam Mohammed",
    dob: "07-07-1997",
    imgUrl: "https://www.xda-developers.com/files/2019/11/URL-Radio.jpg",
  },
  methods: {
    calculateAge() {
      return 2020 - parseInt(this.dob.split("-")[2]);
    },
    randomFloat() {
      return Math.random(0, 1);
    },
  },
});
