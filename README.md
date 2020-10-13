<h1 align="center"> Vue Master Class🌟</h1>

> This repository constitutes to all the implementations, learnings, exercises built through the course by **Maximilian Schwarzmüller**

## Table of contents 📋

1. [First Vue App](#first-vue-app)
2. [Vue Js DOM](#vue-js-dom-)
3. [Vue Conditionals](#conditionals-)
4. [Rendering Lists](#rendering-lists-)
5. [Using Vue CLI](#using-the-vue-cli-)
6. [Introduction to the Components](#introduction-to-the-components-)
7. [Communication between the Components](#communication-between-the-components-)
8. [Handling forms](#handling-forms-)

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

- Render the above created tag onto the root **App.vue**

```html
<app-server-status></app-server-status>
```

### 5. Folder Structure

We can use multiple folders for better maintenance of code

1. For small, medium sized applications we can use **Components** folder and place all our Vue files into that
2. For large scale enterprise applications we can nest folders inside **Components** folder based on shared or feature specific component

### 6. Scoped Style

If we apply the below style on any component, it by default applies it globally instead of applying it to only the current component

```html
<style>
  div {
    border: 1px solid greenyellow;
  }
</style>
```

We should scope the style in the following manner to apply styles locally to only that particular component

```css
<style scoped>
div {
    border: 1px solid greenyellow
}
</style>
```

## Communication between the Components 🤝

When we are using the components be it a small application or an enterprise application, passing the data between the components needs to be there.

### 1. Registering the props to receive the data

When the data is passed between 2 components, be it the parent of child or vice-versa the component which is receiving them needs to register the **props** property through which it can receive the data

```javascript
export default {
  props: ["name"],
};
```

**Props** is an array and the values passed in the array are the property names passed from the other component (parent). In the above case the array has **name** being passed, so this same **name** is being passed as an attribute from the parent component

### 2. Sending the data

The data properties that are being communicated between the components are passed using the **v-bind** to the attribute it's being passed on

```html
<app-user-detail :name="name"></app-user-detail>
```

### 3. Using the received data in the methods

Receive the data from the parent component and reverse the name and render

```javascript
export default {
  props: ["myName"],
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
  },
};
```

**Calling the above method**

```html
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>Name: {{ switchName() }}</p>
</div>
```

### 4. Property validation

We can validate whether the data being sent is of a specific type or not

```javascript
props: {
  myName: [String, Array];
}
```

In the above example, **myName** can be either String or Array

**Advanced Validations**

We can also set a default value

```javascript
props: {
  myName: {
    type: String,
    default: "AssSam7"
  };
}
```

### 5. Child to Parent Communication using Custom Events

Currently we are changing the name from the parent component and rendering the name in the child component. If we had a usecase to change the name back to original from the child component, we have a emit a custom event that would be listened in the parent component

**Emitting Custom Event**

Since all components are like Vue instance, we can use all the methods here as well which were used in the Vue instance like $data, $refs, $emit etc. **$emit\*\* accepts 2 arguments

- Name of the event
- Data being passed through this event

```javascript
export default {
  props: {
    myName: String,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Aslam";
      this.$emit("nameReset", this.myName);
    },
  },
};
```

**Listening for the custom event**

Receiving the changed data back to the parent component needs to register an event listener like the below. We can use **v-on** directive, here we're using it's short form syntax **@** and setting the **name** data property to the **\$event** which means the **2nd** argument being passed in the **\$emit** of the child component

```javascript
<app-user-detail
  :myName="name"
  @nameReset="name = $event"
></app-user-detail>
```

### 6. Communication using call backs

Lets create a **resetName()** method directly in the parent and pass it on to the child

```javascript
methods: {
  changeName() {
    this.name = "AssSam7";
  },
  resetName() {
    this.name = "Aslam";
  },
}
```

```html
<app-user-detail
  :myName="name"
  @nameReset="name = $event"
  :resetFunc="resetName"
></app-user-detail>
```

**Receiving the props of the child component**

```javascript
props: {
  myName: String,
  resetFunc: Function,
}
```

**Using the above callback**

```html
<button @click="resetFunc">Reset name (Parent)</button>
```

### 7. Communication between the siblings

The siblings can't be communicated directly, they need to go via the parent to reflect the changed or pass the data to the other sibling components

**Passing the edited age from sibling to parent**

```javascript
editAge() {
  this.userAge = 23;
  this.$emit("ageEdit", this.userAge);
}
```

**Receiving the event in the parent**

```html
<app-user-edit :userAge="age" @ageEdit="age = $event"></app-user-edit>
```

### 8. Using the Event Bus for Centralized Communication

The above approach used for the communication between the siblings can get tricky if there are nested child components and it must pass through many other components which is not required all time. For this purpose, event bus is the best and most efficient method which manages the state easily

**Declaring the event bus (main.js)**

It should be declared before our root Vue instance as we're using it inside the components

```javascript
export const eventBus = new Vue();
```

The above export is a **Named export** where we are directly exporting the particular object in the form of a new Vue instance

**Sending the data to the sibling (UserEdit.vue)**

1. Import the **eventBus**

```javascript
import { eventBus } from "../main";
```

2. Emit the event onto the **eventBus**

```javascript
eventBus.$emit("ageEdit", this.userAge);
```

**Receiving the data from the sibling (UserDetail.vue)**

1. Import the **eventBus**

```javascript
import { eventBus } from "../main";
```

2. Listening for the events emitted onto the **eventBus**. It is placed on a life cycle hook called **created** where all the components are created before executing the below code

```javascript
created() {
  eventBus.$on("ageEdit", (age) => {
    this.userAge = age;
  });
}
```

## Advanced Components Usage ⏰

Here all the advanced stuff related to components are covered like dynamic components, adding the content through slots etc.

### 1. Adding the content through slots

Suppose a raw HTML needs to be passed onto the child components which is tough when done through the naive **props** technique. Here comes the slots to save us

**Parent component (Sending)**

We can add the HTML inside the tag of the child component to send that

```html
<app-quote>
  <h1>Aslams Musings</h1>
  <p>Parent to children</p>
</app-quote>
```

**Child components (Receiving)**

In order to receive the HTML(data) just add the **<slot>** tag inside the child template

```html
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

### 2. Slot Content Compilation and Styling

Two key takeaways (Previous)

1. The HTML being passed from parent to child can only be styled in the child component as it's already passed from the parent.

2. Except the styling everything else regarding the template being passed can be done from the parent.

**Latest Update**

1. Everything can be done with in the parent component regarding the template being passed.

### 3. Using Multiple slots

Multiple slots can be used to use the HTML being sent at different places of the component

**Naming them in the child**

```html
<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>

    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
```

**Sending them according to the names**

```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">Parent to children</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>
```

### 3. Dynamic Components

Suppose we have 3 components **Quote.vue**, **Author.vue** and **New.vue** and we want to dynamically show a particular component based on button clicks, Here we have to use a dynamic component where we pass the **selector** dynamically based on the button clicks

**Registering a dynamic component**

Here we have to bind the **is** property with the raw selector tag or we can use the data property which gets changed on button click

```html
<component :is="selectedComponent">
  <p>Parent to children</p>
</component>
```

**Changing the data on button clicks**

We can change the data with that particular selector based on the buttons

```html
<button @click="selectedComponent = 'appQuote'">Show Quote</button>
<button @click="selectedComponent = 'appAuthor'">Show Author</button>
<button @click="selectedComponent = 'appNew'">Show New</button>
```

### 4. Understanding dynamic components

Here we are switching the components using the dynamic components, while switching all the components are re-created again and again when they are passed into the **component** tag using **is** binding. To avoid this, we can wrap our component inside a special Vue reserved tag known as **<keep-alive>**

```html
<keep-alive>
  <component :is="selectedComponent">
    <p>Parent to children</p>
  </component>
</keep-alive>
```

### 5. Life cycle hooks (Dynamic components)

Suppose we want to persist the life cycle hooks before the **keep-alive**, for this case we get 2 life cycle hooks of dynamic components

1. Activated

This hook gets triggered whenever the component gets loaded

```javascript
activated() {
    console.log("Activated!");
  }
```

2. Deactivated

This hook gets triggered whenever the component is switched away

```javascript
deactivated() {
  console.log("Deactivated!");
}
```

## Handling forms 📝

Forms form a crucial part of UX and are the means of communication between the user and the server

### 1. Basic form handling using v-model

We have seen this before like for the two-way data binding **v-model** does the job and everything is handled internally

**Creating the data property**

```javascript
data() {
  return {
    email: "",
  };
}
```

**Binding to the HTML(v-model)**

```html
<input type="text" id="email" class="form-control" v-model="email" />
```

### 2. Grouping data & pre-populating inputs

Instead of using individual data properties for each input, we can use an object of **user** and pass all the inputs as its properties

```javascript
data() {
  return {
    user: {
      email: "",
      password: "",
      age: 23,
    },
  };
}
```

**Binding them to the template**

```html
<input type="text" id="email" class="form-control" v-model="user.email" />

<input
  type="password"
  id="password"
  class="form-control"
  v-model="user.password"
/>

<input type="number" id="age" class="form-control" v-model="user.age" />
```

### 3. Input modifiers

Suppose we want to change the way **v-model** updates the data, by default it updates on every key stroke but we want it to update on just **change** i.e. it updates whenever user finishes typing and the value is changed

```html
<input type="number" id="age" class="form-control" v-model.lazy="user.age" />
```

There are other modifiers like

- trim: To remove whitespaces
- number: To convert to a number

### 4. Binding Text areas

Interpolation with the text areas doesn't work like other HTML element. Instead to pass the data or two-way binding we can anyhow use **v-model**

```html
<textarea
  id="message"
  rows="5"
  class="form-control"
  v-model="user.message"
></textarea>
```

By default the data stored is multi-line, while displaying due CSS reset it gets rendered in a single line. To make it multi-line, simple add the following CSS rule

```html
<p style="white-space: pre">Message: {{ user.message }}</p>
```

### 5. Using the checkboxes and populating data to Arrays

We can bind 2 inputs to the same data property then Vue JS merges both the data and stores it

```html
<input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail" />

<input
  type="checkbox"
  id="sendInfomail"
  value="SendInfoMail"
  v-model="sendMail"
/>
```

Based on the check and uncheck, it addes and removes it from the array

```javascript
sendMail: [];
```

### 6. Handling the radio buttons

By default, when radio inputs are added our application cannot figure out that only one must be selected. Thanks to Vue, if you bind all the radio buttons to the same data property the purpose is served and the value is stored indeed

```html
<input type="radio" id="male" value="Male" v-model="gender" />

<input type="radio" id="female" value="Female" v-model="gender" />
```
