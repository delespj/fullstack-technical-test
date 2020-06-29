<template>
  <div class="f-table f-content">
    <div class="f-cell">{{ movie.rank }}</div>
    <div class="f-cell">{{ movie.title }}</div>
    <div class="f-cell f-large-cell">{{ movie.synopsis }}</div>
    <div class="f-cell">{{ movie.director }}</div>
    <div class="f-cell">{{ movie.duration }}</div>
  </div>
</template>

<script>
export default {
  name: "MovieRow",
  props: {
    movie: Object
  }
};
</script>

<style scoped>
.f-content {
  height: 15vh;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(0,0,0,.12);
}

.light {
    background-color: #fdfdfd;
}

.dark {
    background: #e6e6e6;
}
</style>