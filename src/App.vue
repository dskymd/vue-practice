<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { useCounterStore } from '@/stores/counter'


const counter = useCounterStore()
// counter.increment() // counter.count++


const count = () => {
  counter.increment()
}

onErrorCaptured(() => {
  console.log('somethings wrong')
})


</script>

<template>
  <header>

    <div class="wrapper">
      <h1>Vue Practice</h1>
      <div class="flex">

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/suspence">Suspence</RouterLink>
          <RouterLink to="/promise">Promise</RouterLink>
          <RouterLink to="/canvas">Canvas</RouterLink>
        </nav>

        <aside class="aside">
          <span>Current Count: {{ counter.count }}</span> /
          <span>doubleCount: {{ counter.doubleCount }}</span> /
          <span>doubleCountPlusOne: {{ counter.doubleCountPlusOne }}</span> /
          <button @click="count">Count</button>
        </aside>
      </div>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  border-bottom: 1px solid #999;
  padding: 2rem;
  margin-bottom: 2rem;
}


.flex {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}


.aside {
  flex-grow: 1;
  /* width: 600px; */
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
