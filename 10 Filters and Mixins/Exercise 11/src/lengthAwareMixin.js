export const lengthAwareMixin = {
  computed: {
    msgWithCount() {
      return `${this.msg} (${this.msg.length})`;
    },
  },
};
