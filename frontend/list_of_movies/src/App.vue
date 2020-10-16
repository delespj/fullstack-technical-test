<template>
  <div width="100%">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import "./assets/css/styles.css";
</style>
