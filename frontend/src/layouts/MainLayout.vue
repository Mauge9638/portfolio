<template>
  <div class="fixed top-0 w-screen">
    <ul class="bg-blue-200 border flex border-green-400">
      <li class="mr-6">
        <router-link class="text-silver-500 hover:text-blue-800;" to="/"
          >Home
        </router-link>
      </li>

      <li class="mr-6">
        <router-link class="text-silver-500 hover:text-blue-800;" to="/about"
          >About</router-link
        >
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
