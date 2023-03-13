<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <hr />
  <!-- window共享 -->
  <div>window共享</div>
  <window-share></window-share>
  <hr/>
  <!-- props共享 -->
  <div>props共享</div>
  <prop-share></prop-share>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
