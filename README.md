<h1 align="center"> Vue Master Class🌟</h1>

> This repository constitutes to all the implementations, learnings, exercises built through the course by **Maximilian Schwarzmüller**

## Table of contents 📋

1. [First Vue App](#first-vue-app)
2. [Vue Js DOM](#vue-js-dom-)
3. [Vue Conditionals](#conditionals-)
4. [Rendering Lists](#rendering-lists-)
5. [Using Vue CLI](#using-the-vue-cli-)

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

### 2. Getting the index

We can use paranthesis and give 2 arguments (The following order is important)

1. The array property or value
2. Index

```html
<ul>
  <li v-for="(ing, i) in ingredients">{{ ing }} ({{ i }})</li>
</ul>
```

### 3. Alternative V-for (Template tag)

Similar to v-if, v-for can also be used on the template tag to output the data into different elements. For Ex: data into an element and index into another element. Here unline v-if alternative, v-for is used in the template tag itself.

```html
<template v-for="(ing, i) in ingredients">
  <h1>{{ ing }}</h1>
  <h2>{{ i }}</h2>
</template>
```

### 4. Looping through the objects (Array of objects)

We can loop through the array of objects in the following way

```html
<ul>
  <li v-for="person in persons">
    <div v-for="(value, key, index) in person">
      {{ key }}:{{ value }} ({{ index }})
    </div>
  </li>
</ul>
```

Firstly looping through every object and then looping through the keys and values of that object

### 5. List of numbers

Suppose you want to output all the numbers from 1 to 10, it is pretty easy in Vue JS

```html
<ul v-for="n in 10">
  <li>{{ n }}</li>
</ul>
```

**10** above represents not just the **number** 10 but the **range** or the **outbound** value starting from 1

## Using the Vue CLI 👨‍💻

Moving to a more real-time workflow, creating the vue applications is pretty easy using the CLI tool of the VUE. Here we are the Vue CLI 2 using the **webpack-simple** template to generate a new project.

### 1. Installing the Vue Cli

```bash
npm install -g vue-cli
```

### 2. Creating the sample project

Third and fourth arguments are template and name of the project

```bash
vue init webpack-simple vue-cli
```

### 3. Installing the dependencies

Go to that newly created project folder and run the following command to install all the required dependencies

```bash
npm install
```

### 4. Running the application

This Vue Cli used the webpack for bundling and loading and also serving on the local by spinning up a webpack developement server

```bash
npm run dev
```

## Introduction to the Components 🗃️

Components are the re-usable pieces of code which can be used any number of times. Suppose we want to render something to template by adding the element in the **el** property of the Vue instance, but **el** property is like document.querySelector() of javascript which selects the first element of such element in the DOM. Components come to save us in these situations

### 1. Creating a component (Simple)

It accepts two arguments

1. Name of the tag or element to be selected
2. Object similar to the object we give inside the **Vue** instance

```javascript
Vue.component("my-cmp", {
  data() {
    return {
      status: "Critical",
    };
  },
  template: "<p>Server status: {{ status }}</p>",
});
```

There are some considerations while creating the components

1. The element which we pass into the first argument can be any HTML element or a custom element but it's advised to use the custom element.
2. Data property that we pass inside the object is little different from that we pass in the Vue instance. Here we need to pass a function return the object of properties that we need inside the data property to not interfere with the data properties of the Root instance.
3. Using a local data and passing that data to return from the **data** function of the component causes the problem of the shared data, hence we should return a new object directly from the function instead of using it from locally.

### 2. Registering components locally

```javascript
const comp = {
  data() {
    return {
      status: "Critical",
    };
  },
  template:
    "<p>Server status: {{ status }} <button @click='changeStatus'>Change</button></p>",
  methods: {
    changeStatus() {
      this.status = "Normal";
    },
  },
};
```

Using the above component in our vue instance

```javascript
new Vue({
  el: "#app1",
  components: {
    "my-cmp": comp,
  },
});
```

**Vue.component()** registers the component globally

### 3. Creating Single file templates (Components)

- Go to **src** folder and create your file ending with **.vue** extension
- A Single file template or more formally known as template consists of 3 things

1. Template tag (One important point is inside template tag only one root element needs to be present i.e. If you have multiple elements wrap all the elements into a div and put that div onto this template)
2. Script tag with exported object
3. Style tag (Optional) for CSS stylings

**Home.vue**

```html
<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr />
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        status: "Critical",
      };
    },
    methods: {
      changeStatus() {
        this.status = "Normal";
      },
    },
  };
</script>
```

### 4. Using the above single file template as a component

- Import the file in the **main.js** as the following

```javascript
import Home from "./Home.vue";
```

- Using the above import as a component and binding it to a tag

```javascript
Vue.component("app-server-status", Home);
```

- Render the above created tag onto root **App.vue**

```html
<app-server-status></app-server-status>
```
