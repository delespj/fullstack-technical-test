<template>
  <div id="movies-table">
    <div class="f-table f-title">
      <div class="f-cell" v-on:click="sort_by('rank')">
        Rank
        <span v-html="arrow('rank')"></span>
      </div>
      <div class="f-cell" v-on:click="sort_by('title')">
        Title
        <span v-html="arrow('title')"></span>
      </div>
      <div class="f-cell f-large-cell" v-on:click="sort_by('synopsis')">
        Synopsis
        <span v-html="arrow('synopsis')"></span>
      </div>
      <div class="f-cell" v-on:click="sort_by('director')">
        Director
        <span v-html="arrow('director')"></span>
      </div>
      <div class="f-cell" v-on:click="sort_by('duration')">
        Duration
        <span v-html="arrow('duration')"></span>
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
import array_sort from "@/js/array_sort";

export default {
  name: "MoviesTable",
  components: {
    MovieRow
  },
  data: () => ({
    actual_criteria: null,
    is_reverse: false
  }),
  props: {
    movies: Array
  },
  methods: {
    sort_by(criteria) {
      this.is_reverse = (this.actual_criteria === criteria) && !this.is_reverse;
      array_sort(this.movies, criteria, this.is_reverse);
      this.actual_criteria = criteria;
    },
    arrow(criteria) {
      return ((this.actual_criteria === criteria) && !this.is_reverse)
        ? "&#9650;"
        : "&#9660;";
    }
  }
};
</script>

<style>
#movies-table {
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