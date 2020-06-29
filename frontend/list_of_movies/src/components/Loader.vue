<template>
  <div id="loader"></div>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({})
};
</script>

<style scoped>
#loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid hsla(0, 0%, 25%, 1);
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  margin: 45%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>