<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <span
          v-text="'Hello there'"
          v-highlight:background.delayed="'red'"
        ></span>
        <p
          v-html="'<div>Hello this is a div</div>'"
          v-local-highlight:background.delayed.blink="{
            mainColor: 'red',
            secondColor: 'green',
            delay: 500,
          }"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor,
            secondColor = binding.value.secondColor,
            currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == mainColor
                ? (currentColor = secondColor)
                : (currentColor = mainColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
