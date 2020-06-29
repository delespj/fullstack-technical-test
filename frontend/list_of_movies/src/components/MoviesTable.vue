<template>
  <div id="movies-table">
    <div class="f-table f-title">
      <div
        v-for="(criteria, index) in criteria_list"
        :key="index"
        class="f-cell"
        v-bind:class="{'f-large-cell': (criteria === 'synopsis')}"
        v-on:click="sort_by(criteria)"
      >
        {{ criteria.charAt(0).toUpperCase() + criteria.slice(1) }}
        <span
          class="arrow"
          v-html="arrow(criteria)"
        ></span>
      </div>
    </div>
    <div
      class="f-table f-content"
      v-for="(movie, index) in movies.slice(0, 5)"
      :key="index"
      v-bind:class="{
        dark: (index % 2),
        light: !(index % 2)
      }"
    >
      <div
        v-for="(criteria, index) in criteria_list"
        :key="index"
        class="f-cell"
        v-bind:class="{'f-large-cell': (criteria === 'synopsis')}"
      >{{ movie[criteria] }}</div>
    </div>
  </div>
</template>

<script>
import array_sort from "@/js/array_sort";

export default {
  name: "MoviesTable",
  data: () => ({
    criteria_list: ["rank", "title", "synopsis", "director", "duration"],
    actual_criteria: "rank",
    is_reverse: false
  }),
  props: {
    movies: Array
  },
  methods: {
    sort_by(criteria) {
      this.is_reverse = this.actual_criteria === criteria && !this.is_reverse;
      array_sort(this.movies, criteria, this.is_reverse);
      this.actual_criteria = criteria;
    },
    arrow(criteria) {
      return this.actual_criteria === criteria && !this.is_reverse
        ? "&#9650;"
        : "&#9660;";
    }
  },
  created() {
    array_sort(this.movies, this.actual_criteria, this.is_reverse);
  }
};
</script>

<style scoped>
#movies-table {
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #0000001f;
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
  background-color: #404040;
  color: #e6e6e6;
}

.f-content {
  height: 15vh;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #0000001f;
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

.light {
  background-color: #fdfdfd;
}

.dark {
  background: #e6e6e6;
}
.arrow {
  font-size: 0.5em;
}
</style>