<h1 align="center"> Vue Master Class🌟</h1>

> This repository constitutes to all the implementations, learnings, exercises built through the course by **Maximilian Schwarzmüller**

## Table of contents 📋

1. [First Vue App](#example)

## First Vue App 🥇

Building the the first ever Vue application is quite simple. Follow the following steps

### 1. Copy paste the CDN into the script tag

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

### 2. Create a new Vue instance

A new **Vue** instance needs to be created for handling the application, templating, binding etc. It can be created by the following syntax

```javascript
new Vue({
  ...
  ...
  ...
});
```

**Declarative Rendering**

To connect the data and DOM i.e. control the template from the vue application there are some properties to be given to our **Vue instance**

**1. El property**

el property is like the query selector which is used to select the template with in the Vue application.

```javascript
new Vue({
  el: "#app",
});
```

**2. Data property**

data property holds the data, that needs to be passed to the template

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
  },
});
```

We can use the above title field any where in the template with the following syntax

(Data binding)

```html
<div id="app">
  <p>{{title}}</p>
</div>
```

Now, the data and DOM are linked, try changing the data which asynchronously changed the DOM element with the updated data.

### 3. Event Handling

Suppose we want to add an input field and make the value of **title** field to the value entered in the input field. It's kinda two way data-binding, and can be done by using the **v-on** vue directive. **Attributes** to that directive can be added by using the **:** and the attribute(event) name, in this case **input** is the event. It's value is a method which would be triggered once the event is fired.

```html
<input type="text" v-on:input="changeTitle" />
```

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
  },
});
```

Using the above code, the **title** data would be the same as the value entered in the input field (Two-way data binding)
