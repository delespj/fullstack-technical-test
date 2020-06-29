<template>
  <div id="movies-table">
    <div class="f-table f-title">
      <div class="f-cell">
        Rank
        <span v-on:click="rank_sort()" v-html="arrow"></span>
      </div>
      <div class="f-cell">
        Title
        <span v-on:click="title_sort()" v-html="arrow"></span>
      </div>
      <div class="f-cell f-large-cell">
        Synopsis
        <span v-on:click="title_sort()" v-html="arrow"></span>
      </div>
      <div class="f-cell">
        Director
        <span v-on:click="title_sort()" v-html="arrow"></span>
      </div>
      <div class="f-cell">
        Duration
        <span v-on:click="title_sort()" v-html="arrow"></span>
      </div>
    </div>
    <MovieRow
      v-for="(movie, index) in movies"
      :key="index"
      :movie="movie"
      v-bind:class="{
        dark: (index % 2),
        light: !(index % 2)
      }"
    ></MovieRow>
  </div>
</template>

<script>
import MovieRow from "@/components/MovieRow.vue";

export default {
  name: "MoviesTable",
  components: {
    MovieRow
  },
  data: () => ({
    order: {},
    arrow: "&#9650;"
  }),
  props: {
    movies: Array
  },
  methods: {
    rank_sort() {
      this.movies.sort((a, b) => a.rank - b.rank);
      console.log(this.movies);
    },
    title_sort() {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
      console.log(this.movies);
    }
  }
};
</script>

<style>
#movies-table {
  background: #fff;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  width: 80vw;
  margin: 10%;
}

.f-table {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.f-title {
  height: 5vh;
  font-weight: 500;
  background-color: hsla(0, 0%, 25%, 1);
  color: hsla(0, 0%, 90%, 1);
}

.f-cell {
  width: 8vw;
  margin: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.f-large-cell {
  width: 40%;
}
</style>