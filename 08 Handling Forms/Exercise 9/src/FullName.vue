<template>
  <div>
    <div class="form-group">
      <label for="password">First Name</label>
      <input
        type="input"
        id="firstname"
        class="form-control"
        @input="nameChanged(true, $event)"
        :value="firstName"
      />
    </div>

    <div class="form-group">
      <label for="password">Last Name</label>
      <input
        type="input"
        id="lastname"
        class="form-control"
        @input="nameChanged(false, $event)"
        :value="lastName"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      let name = isFirst
        ? `${event.target.value} ${this.lastName}`
        : `${this.firstName} ${event.target.value}`;
      this.value = name;
      this.$emit("input", this.value);
    },
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    },
  },
};
</script>
