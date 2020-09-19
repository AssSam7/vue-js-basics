<h1 align="center"> Vue Master Class🌟</h1>

> This repository constitutes to all the implementations, learnings, exercises built through the course by **Maximilian Schwarzmüller**

## Table of contents 📋

1. [First Vue App](#first-vue-app)
2. [Vue Js DOM](#vue-js-dom-)
3. [Vue Conditionals and Rendering Lists](#conditionals-and-rendering-lists-)

## First Vue App🥇

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

## Vue Js DOM 🌲

Here all the concepts related to the following are covered

- Binding data
- Binding attributes
- V-once directive
- V-html directive
- Events
- Passing our own arguments to events
- Event modifiers
- Two way data binding
- Dependant properties
- Dynamic Styling

## Conditionals ❔

### 1. V-if directive

In modern applications only at a particular time, few views needs to be shown based on the data returned from the back-end. In Vue, **v-if** directive is here to save us serving its purpose of conditional rendering. It operates on the **truthy** and **falsy** values i.e. if **truthy** show that particular element, **falsy** detaches the whole element from the DOM including the nested elements.

```html
<p v-if="show">Do you also see me?</p>
```

```javascript
new Vue({
  el: "#app",
  data: {
    show: true,
  },
});
```

### 2. V-else directive

Like the **v-if** there is also the **v-else** directive which executes if the **v-if** returns the **falsy** value. It is inherited from the parent if condition, i.e. cannot stand independantly.

```html
<p v-else>Do you also see me?</p>
```

### 3. V-else-if directive

In the latest vue versions of **>2** there is one more directive serving the purpose of **else-if** conditions

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

### 4. Grouping multiple elements for conditionals

Suppose we want to render multiple elements based on the conditions, instead of attaching v-if for all the elements, wrap all those elements in a <template> tag which is an HTML5 tag which doesn't gets rendered in the DOM, instead the child elements or the content inside the <template> gets added to the DOM.

```html
<template v-if="show">
  <p>Hello there!</p>
  <h1>Heading 1</h1>
</template>
```

## Rendering lists 📋

If we have more complex data like an array or group of objects to render, it can be done by **v-for** directive

### 1. Simple array

Suppose we have the following data

```javascript
ingredients: ["chicken", "fruits", "cookies"];
```

We can simple use **v-for** in this way to render a list

```html
<ul>
  <li v-for="ing in ingredients">{{ ing }}</li>
</ul>
```
